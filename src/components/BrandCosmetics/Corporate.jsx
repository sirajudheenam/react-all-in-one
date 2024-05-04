import React, { useEffect, useState } from 'react';
import metaData from './data.json';

export async function aboutAction() {
  return null;
}

export async function aboutLoader({ request }) {
  return null;
}

export async function privacyAction() {
  return null;
}

export async function privacyLoader({ request }) {
  return null;
}

export async function termsAction() {
  return null;
}

export async function termsLoader({ request }) {
  return null;
}

export const About = () => {
  const [appData, setAppData] = useState([]);
  useEffect(() => {
    setAppData(JSON.parse(JSON.stringify(metaData.app)));
  }, []);

  return (
    <div className="about-page">
      {appData && (
        <>
          <h1>About {appData.name}</h1>
          <p>
            Welcome to {appData.name}! Our app is designed to provide an
            interactive demonstration of React JS abilities and offer valuable
            frontend development tips for both beginners and seasoned
            developers.
          </p>
        </>
      )}
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower developers with the knowledge and tools
          needed to craft high-quality, modern web applications using React JS.
          We believe in sharing knowledge and fostering a community of
          passionate developers.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Interactive React JS demonstrations.</li>
          <li>Up-to-date frontend development tips.</li>
          <li>Easy authentication with Google.</li>
          <li>User-friendly interface for an enhanced learning experience.</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        {appData && (
          <p>
            If you have any questions, suggestions, or feedback, feel free to
            reach out to us at {appData.email}. We're always eager to hear from
            our users and the broader developer community!
          </p>
        )}
      </section>

      <section>
        <h2>Join Our Community</h2>
        {/* TODO: FIX Data Display */}
        {appData && appData.social?.youtube?.channels?.name !== '' && (
          <p>
            Become a part of our growing community by following us on
            {appData.social?.youtube?.channels?.name} and joining our forum
            discussions. Together, we can make web development more accessible
            and enjoyable for everyone!
          </p>
        )}
      </section>
    </div>
  );
};

export const PrivacyPolicy = () => {
  const [appData, setAppData] = useState([]);
  useEffect(() => {
    setAppData(JSON.parse(JSON.stringify(metaData.app)));
  }, []);

  return (
    <div className="privacy-policy">
      {appData && (
        <>
          <h1>Privacy Policy for {appData.name}</h1>
          <p>
            <strong>Last updated:</strong> {appData.policyUpdatedAt}
          </p>

          <p>
            Welcome to {appData.name}! We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about our policy, or our practices with
            regards to your personal information, please contact us at{' '}
            <b> {appData.email} </b>.
          </p>
        </>
      )}

      <p>
        When you visit our app, and use our services, you trust us with your
        personal information. We take your privacy very seriously. In this
        privacy policy, we seek to explain to you in the clearest way possible
        what information we collect, how we use it, and what rights you have in
        relation to it. We hope you take some time to read through it carefully,
        as it is important.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        Our app provides a demonstration of React JS abilities and offers
        frontend development tips. In order to provide this service, we collect
        and process the following information:
      </p>
      <h3>Information provided by Google during Authentication:</h3>
      <ul>
        <li>
          <strong>Full Name:</strong> To personalize your experience.
        </li>
        <li>
          <strong>Email Address:</strong> To communicate with you regarding app
          updates or other related information.
        </li>
      </ul>
      <p>
        We don't store your password or any other sensitive information as we
        rely on Google's OAuth service for authentication.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect in various ways, including to:</p>
      <ul>
        <li>Provide, operate, and maintain our app.</li>
        <li>
          Personalize user experience and to deliver content and product
          offerings relevant to user interests.
        </li>
        <li>
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the app, and for marketing and promotional
          purposes.
        </li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We don't share or sell your personal information with third parties. We
        only share information with Google for the sole purpose of
        authentication.
      </p>

      <h2>4. How We Protect Your Information</h2>
      <p>
        We use organizational and technical measures to protect your personal
        data. While we implement safeguards designed to protect your
        information, no security system is impenetrable and due to the inherent
        nature of the Internet, we cannot guarantee that your data is 100% safe
        from intrusion by others.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to request access to, correction of, or deletion of
        your personal data. You can also object to the processing of your data
        in some circumstances and you can ask us to send your data to someone
        else.
      </p>

      <h2>6. Changes to this Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      {appData && (
        <ul>
          <li>
            By email: <b> {appData.email}</b>.
          </li>
        </ul>
      )}
    </div>
  );
};

export const TermsOfService = () => {
  const [appData, setAppData] = useState([]);
  useEffect(() => {
    setAppData(JSON.parse(JSON.stringify(metaData.app)));
  }, []);

  return (
    <div className="terms-of-service">
      {appData && (
        <>
          <h1>Terms of Service for {appData.name}</h1>

          <p>Last Updated: {appData.policyUpdatedAt}</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using {appData.name}, you agree to be bound by
              these Terms of Service. If you disagree with any part of the
              terms, then you may not access the service.
            </p>
          </section>

          <section>
            <h2>2. Use of the Service</h2>
            <p>
              {appData.name} provides demonstrations of React JS abilities and
              frontend development tips. Users are expected to use this service
              responsibly and for educational purposes only.
            </p>
          </section>

          <section>
            <h2>3. Accounts</h2>
            <p>
              When you create an account with us, you must provide us with
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our service.
            </p>
          </section>

          <section>
            <h2>4. Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately,
              without prior notice or liability, for any reason whatsoever,
              including, without limitation, if you breach the Terms.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall [TechnoTipsToday or "We"], nor its directors,
              employees, partners, agents, suppliers, or affiliates, be liable
              for any indirect, incidental, special, consequential or punitive
              damages, including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the service;
              (ii) any unauthorized access to or use of our servers and/or any
              personal information stored therein.
            </p>
          </section>

          <section>
            <h2>6. Changes to Terms of Service</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will notify
              you of the changes. What constitutes a material change will be
              determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at
              {appData.email}.
            </p>
          </section>
        </>
      )}
    </div>
  );
};
