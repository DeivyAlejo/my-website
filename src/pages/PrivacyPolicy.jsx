import React from 'react'

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-24 text-gray-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-gray-600">Last updated: September 15, 2026</p>

        <div className="space-y-6 leading-7">
          <p>
            Canada Immigration Radar respects your privacy and is committed to
            handling data responsibly.
          </p>
          <p>
            This application uses Meta’s Facebook APIs to manage and publish
            content to Facebook Pages that have been authorized for use with the
            application.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Information the application may access
            </h2>
            <p className="mb-2">
              Depending on the permissions granted through Meta, the application
              may access limited Facebook Page information required to operate its
              publishing features, including:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Facebook Page identifiers</li>
              <li>Page access tokens</li>
              <li>Basic Page information</li>
              <li>Permissions required to publish and manage Page posts</li>
            </ul>
            <p className="mt-2">
              The application does not intentionally collect sensitive personal
              information from Facebook users.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">How information is used</h2>
            <p className="mb-2">
              Information accessed through Meta’s APIs is used only to:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Authenticate access to authorized Facebook Pages</li>
              <li>Publish automated posts</li>
              <li>Manage or verify published Page content</li>
              <li>Maintain the operation and security of the application</li>
            </ul>
            <p className="mt-2">
              Facebook data is not used for targeted advertising or unrelated
              purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Data sharing</h2>
            <p>
              Canada Immigration Radar does not sell Facebook data or personal
              information.
            </p>
            <p className="mt-2">
              Data obtained through Meta’s APIs is not shared with third parties
              except when required to operate the underlying technical
              infrastructure or when required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Data storage and security</h2>
            <p>
              Authentication credentials, access tokens, and application
              configuration data may be stored securely as necessary to operate
              the application.
            </p>
            <p className="mt-2">
              Reasonable technical measures are used to protect this information
              from unauthorized access, disclosure, alteration, or misuse.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Data retention</h2>
            <p>
              Data is retained only for as long as reasonably necessary to operate
              the application.
            </p>
            <p className="mt-2">
              Access tokens or other authorization information may be removed when
              they are no longer required or when access to the associated
              Facebook Page is revoked.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Revoking access</h2>
            <p>
              Facebook Page access can be revoked through the relevant Facebook or
              Meta account settings.
            </p>
            <p className="mt-2">
              Once authorization is revoked, the application will no longer be
              able to access or manage the affected Facebook Page through Meta’s
              APIs.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Data deletion requests</h2>
            <p>
              If you would like to request deletion of information associated with
              the application, you can contact:
            </p>
            <p className="mt-2">
              Email:{' '}
              <a
                className="text-blue-700 underline"
                href="mailto:alejandro2460@gmail.com"
              >
                alejandro2460@gmail.com
              </a>
            </p>
            <p className="mt-2">
              Please include enough information to identify the relevant request.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Third-party services</h2>
            <p>
              This application interacts with services provided by Meta Platforms,
              Inc. Use of Facebook and Meta services is also subject to Meta’s own
              terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Changes to this policy</h2>
            <p>
              This Privacy Policy may be updated from time to time to reflect
              changes to the application, its functionality, or applicable
              requirements.
            </p>
            <p className="mt-2">
              Any changes will be published on this page with an updated revision
              date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Contact</h2>
            <p>
              For questions about this Privacy Policy or the handling of
              information by Canada Immigration Radar, contact:
            </p>
            <p className="mt-2">
              Email:{' '}
              <a
                className="text-blue-700 underline"
                href="mailto:alejandro2460@gmail.com"
              >
                alejandro2460@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default PrivacyPolicy
