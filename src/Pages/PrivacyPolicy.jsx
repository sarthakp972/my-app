// src/Pages/PrivacyPolicy.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PrivacyPolicy.css";
import { WHATSAPP_NUMBER, EMAIL,YOUTUBE_LINK, ADDRESS, INSTAGRAM_LINK,CALLING_NUMBER, WHATSAPP_MESSAGE,GOOGLE_MAP_LINK} from "../constant";

export default function PrivacyPolicy() {
  return (
    <Container className="privacy-policy-section my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="policy-title mb-4">Privacy Policy</h1>

          <p className="policy-intro">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the personal information of users of our website and services. By using our website, you agree to the terms outlined in this policy.
          </p>

          <h3 className="policy-heading mt-4">1. Information We Collect</h3>
          <p className="policy-text">
            We may collect personal information such as your name, email address, phone number, and other contact details when you voluntarily provide it on our website, including through contact forms, newsletter subscriptions, or service requests. We may also collect non-personal information like browser type, IP address, and browsing patterns to improve website functionality and user experience.
          </p>

          <h3 className="policy-heading mt-4">2. Use of Information</h3>
          <p className="policy-text">
            The information we collect is used to:
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and service requests</li>
              <li>Send important updates and promotional communications (with consent)</li>
              <li>Analyze website usage and trends</li>
            </ul>
          </p>

          <h3 className="policy-heading mt-4">3. Data Protection</h3>
          <p className="policy-text">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to secure your data, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="policy-heading mt-4">4. Sharing of Information</h3>
          <p className="policy-text">
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting business, or servicing you, provided they agree to keep your information confidential.
          </p>

          <h3 className="policy-heading mt-4">5. Cookies and Tracking</h3>
          <p className="policy-text">
            Our website uses cookies and similar technologies to enhance user experience, analyze trends, and improve functionality. You can manage cookie preferences through your browser settings.
          </p>

          <h3 className="policy-heading mt-4">6. User Rights</h3>
          <p className="policy-text">
            You have the right to access, update, or delete your personal information. You can also withdraw consent to receive promotional communications at any time by contacting us directly.
          </p>

          <h3 className="policy-heading mt-4">7. Changes to This Policy</h3>
          <p className="policy-text">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the effective date. We encourage you to review this policy periodically.
          </p>

          <h3 className="policy-heading mt-4">8. Contact Us</h3>
          <p className="policy-text">
            For any questions or concerns regarding this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> {EMAIL}
            <br />
            <strong>Phone:</strong> {WHATSAPP_NUMBER}
            <br />
            <strong>Address:</strong> {ADDRESS}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
