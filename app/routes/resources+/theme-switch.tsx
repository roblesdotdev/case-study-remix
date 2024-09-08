import { getFormProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { json, type ActionFunctionArgs } from '@remix-run/cloudflare'
import { useFetcher, useFetchers } from '@remix-run/react'
import { z } from 'zod'
import { useHints } from '~/utils/client-hints'
import { useRequestInfo } from '~/utils/request-info'
import { setTheme, type Theme } from '~/utils/theme.server'

const themeSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']),
})

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const submission = parseWithZod(formData, { schema: themeSchema })

  if (submission.status !== 'success') {
    throw new Response('Invalid submission')
  }

  const { theme } = submission.value

  return json(
    { result: submission.reply() },
    { headers: { 'set-cookie': setTheme(theme) } },
  )
}

export function ThemeSwitch({
  userPreference,
}: {
  userPreference: Theme | null
}) {
  const fetcher = useFetcher<typeof action>()
  const optimisticMode = useOptimisticThemeMode()
  const mode = optimisticMode ?? userPreference ?? 'system'
  const nextMode =
    mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system'
  const [form] = useForm({
    id: 'theme-switch',
    lastResult: fetcher?.data?.result,
  })

  return (
    <fetcher.Form
      method="POST"
      {...getFormProps(form)}
      action="/resources/theme-switch"
    >
      <input type="hidden" name="theme" value={nextMode} />
      <button className="border px-3 py-2">{mode}</button>
    </fetcher.Form>
  )
}

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export function useOptimisticThemeMode() {
  const fetchers = useFetchers()
  const themeFetcher = fetchers.find(
    f => f.formAction === '/resources/theme-switch',
  )

  if (themeFetcher && themeFetcher.formData) {
    const submission = parseWithZod(themeFetcher.formData, {
      schema: themeSchema,
    })

    if (submission.status === 'success') {
      return submission.value.theme
    }
  }
}

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export function useTheme() {
  const hints = useHints()
  const requestInfo = useRequestInfo()
  const optimisticMode = useOptimisticThemeMode()
  if (optimisticMode) {
    console.log(optimisticMode)
    return optimisticMode === 'system' ? hints.theme : optimisticMode
  }
  return requestInfo.theme ?? hints.theme
}
