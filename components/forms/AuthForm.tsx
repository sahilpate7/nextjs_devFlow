'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import ROUTES from '@/constants/routes'

interface AuthFormProps<T extends FieldValues> {
    schema: ZodType<T>,
    defaultValues: T,
    formType: 'SIGN_IN' | 'SIGN_UP',
    onSubmit: (data: T) => Promise<{ success: T }>
}

const AuthForm = <T extends FieldValues> ({
  schema,
  formType,
  defaultValues,
  onSubmit

}: AuthFormProps<T>) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>
  })

  const handleSubmit : SubmitHandler<T> = async () => {
    // TODO: Authentication
  }

  const buttonText = formType === 'SIGN_IN' ? 'Sign in' : 'Sign up'

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 mt-10">
            {Object.keys(defaultValues).map((field) => (
                <FormField
                    key={field}
                    control={form.control}
                    name={field as Path<T>}
                    render={({ field }) => (
                        <FormItem className={'flex w-full flex-col gap-2.5'}>
                            <FormLabel className={'paragraph-medium text-dark400_light700'}>{field.name === 'email' ? 'Email Address' : field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    type={field.name === 'password' ? 'password' : 'input'}
                                    className={'paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border'}
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))}
            <Button className={'primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900'} disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? buttonText === 'Sign in' ? 'Signing in...' : 'Signing up...' : buttonText}
            </Button>
            {formType === 'SIGN_IN'
              ? <p>
                    Dont have an account?  <Link href={ROUTES.SIGN_UP} className={'paragraph-semibold primary-text-gradient'}>Sign up</Link>
                </p>
              : <p>
                Already have an account? <Link href={ROUTES.SIGN_IN} className={'paragraph-semibold primary-text-gradient'}>Sign in</Link>
            </p>}
        </form>
    </Form>
  )
}

export default AuthForm
