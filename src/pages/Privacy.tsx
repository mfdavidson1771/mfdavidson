import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>The website "M. F. Davidson" at <a href="https://www.mfdavidson.com">https://www.mfdavidson.com</a> is owned by Mark F. Davidson ("Owner"), who is a data controller of your personal data.</p>
            
            <p>This Privacy Policy determines how the information collected by <a href="https://www.mfdavidson.com">https://www.mfdavidson.com</a> ("Site") is processed, and it sets forth the means to protect your personal data and to undertake its confidentiality and security.</p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Personal information we collect:</h2>
              <p>When you visit <a href="https://www.mfdavidson.com">https://www.mfdavidson.com</a> it automatically collects certain information about your device, such as information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, it may collect information about the individual web pages you view, what websites or search terms referred you to the Site, and how you interact with the Site. This automatically collected information is referred to here as "Device Information." Moreover, your personal data (including but not limited to Name, email, telephone number, etc.) that you provide on any contact form at <a href="https://www.mfdavidson.com">https://www.mfdavidson.com</a> may be collected by the Owner.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Why is your data processed?</h2>
              <div className="space-y-4">
                <p>The Owner's top priority is user data security, and, as such, the Site only processes minimal user data, that is, only as much as it is necessary to maintain the website and its quality.</p>
                
                <p>Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.</p>
                
                <p>You can visit the Site without telling the owner who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to contact the Owner by filling out an online contact form or other form at <a href="https://www.mfdavidson.com">https://www.mfdavidson.com</a>, you may provide personal data to the Owner, such as your email, first name, last name, organization, and telephone number. You can choose not to provide such personal data, but then you may not be able to contact the Owner directly from the Site.</p>

                <p><strong>Use of reCAPTCHA:</strong> This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and 
                <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Links to other websites:</h2>
              <p>The Site may contain links to other websites that are not owned or controlled by the Owner. Please be aware that the Owner is not responsible for such other websites or third parties' privacy practices. The Owner encourages you to be aware when you leave the Site <a href="https://www.mfdavidson.com">https://www.mfdavidson.com</a> and to read the privacy statements of each website that may collect personal information.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Information security:</h2>
              <p>Information you provide is stored on computer servers in a controlled, secure environment, and protected from unauthorized access, use, or disclosure. The Owner keeps reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Legal disclosure:</h2>
              <p>The Owner will disclose any information collected, used, or received if required or permitted by law, such as to comply with a subpoena or similar legal process, and when the Owner believes in good faith that disclosure is necessary to protect the Owner's rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Contact information:</h2>
              <div className="space-y-3">
                <p>If you would like to contact the Owner to understand more about this Policy or wish to contact him concerning any matter relating to individual rights and your Personal Information, you may contact him by:</p>
                <p>Post: Mark F. Davidson, 6450 Sunset Blvd. #1282, Los Angeles, California 90028, United States</p>
                <p>Online contact form: <a href="https://mfdavidson.com/contact">https://mfdavidson.com/contact</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;