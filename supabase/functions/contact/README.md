Supabase Edge Function: contact

How to use

- Ensure you have the Supabase CLI installed and are logged in: `npm install -g supabase` then `supabase login`.
- Set the Resend API key as a secret:

```bash
supabase secrets set RESEND_API_KEY="sk_..."
```

- Serve locally for testing:

```bash
supabase functions serve contact
# then POST to http://localhost:54321/functions/v1/contact
```

- Deploy:

```bash
supabase functions deploy contact --project-ref <your-project-ref>
```

Replace `<your-project-ref>` with the value from your Supabase project settings.
