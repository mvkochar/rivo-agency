import React from 'react'
import './css/Privacy.css'
import { Link } from 'react-router-dom'

const Privacy = () => {
    return (
        <div className='privacy-container'>
            <div className="privacy-back d-f">
                <Link to="/" className="action-link"><img src="/images/prev.png" alt="Back" /></Link>
                <h3 className="action-name title">Back to home page</h3>
            </div>
            <div className="privacy-content">
                <h1 className="privacy-title">Website Terms and Conditions of Use</h1>
                <article>
                    <h3 className="privacy-bl-title">Website administrator</h3>
                    <p className="privacy-bl-text">
                        The rivo.agency website’s (“Website”) owner and administrator is
                        Rivo Agency, a company incorporated under the laws of the Ukraine,
                        with its registered office in Rivne, st. Melnica 1, entered into
                        the register of entrepreneurs of the Ukrainian National Court Register
                        maintained by the District Court for Rivne.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Terms and Conditions of Use</h3>
                    <p className="privacy-bl-text">
                        By accessing this Website, you agree to be bound by these Website Terms and Conditions of Use (“T&C”),
                        all applicable laws and regulations, and agree that you are responsible for compliance with any applicable
                        local laws. If you do not agree with any of these terms, you are prohibited from using or accessing
                        this Website. The materials contained in this Website are protected by applicable copyright
                        and trade mark law. <br />
                        You may use the Website only for lawful purposes. It is forbidden to use the Website:
                        in any way which may lead to a violation of applicable law; in any manner that is unlawful
                        or dishonest, or in a manner that seeks to achieve an unlawful or unfair purpose; to send,
                        knowingly receive, upload, use or reuse content that does not comply with the T&C; to forward or
                        provoke the shipment of any unsolicited or unauthorized advertising or promotional materials,
                        as well as any similar forms belonging to the collective category of “spam”; to knowingly
                        transfer any data, send or upload any material containing viruses, trojans, spyware,
                        adware or other malicious software or similar computer codes programmed to adversely
                        affect or threaten the functioning of any software, network or computer equipment.
                        It is forbidden to attempt to gain unauthorized access to the server on which the Website
                        is stored, computer or database related to the Website, as well as any unauthorised access
                        aimed at or resulting in damage or disruption of any part of the Website, equipment or network
                        where the Website is stored, any software used to operate the Website or any equipment,
                        networks or software owned by or used by third parties.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Use License</h3>
                    <p className="privacy-bl-text">
                        Rivo Agency grants permission to temporarily download one copy of the materials
                        on the Website for personal, non-commercial transitory viewing only. This is
                        the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="privacy-bl-list">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on the Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials;</li>
                        <li>transfer the materials to another entity or "mirror" the materials on any other server.</li>
                    </ul>
                    <p className="privacy-bl-text">
                        This license shall automatically terminate if you violate any of these
                        restrictions and may be terminated by Netguru at any time. Upon termination,
                        your viewing of these materials or upon the termination of this license,
                        you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Disclaimer</h3>
                    <p className="privacy-bl-text">
                        Rivo Agency makes no warranties and representations, expressed or implied, to the digital availability,
                        functionality, compatibility, visibility and/or comprehensibility of the Website. Rivo Agency makes
                        no guarantee that the Website or any of its contents will always be available or access will not be impeded.
                        Rivo Agency holds no liability for any temporary or permanent unavailability or inaccessibility
                        of the Website, in whole or in any part, for any reason and at any time. The materials on
                        Website are provided "as is". Rivo Agency makes no warranties, expressed or implied, and hereby
                        disclaims and negates all other warranties, including without limitation, implied warranties
                        or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                        intellectual property or other violation of rights. Rivo Agency does not warrant or make
                        any representations concerning the accuracy, likely results, or reliability of the use of
                        the materials on the Website or otherwise relating to such materials or on any sites linked
                        to this site. <br />
                        Any information or statements included on the Website shall not constitute a binding offer
                        and cannot be construed as such.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Limitations</h3>
                    <p className="privacy-bl-text">
                        In no event shall Rivo Agency or its suppliers be liable for any damages
                        (including, without limitation, damages for loss of data, profit,, anticipated
                        savings, violation of business continuity, loss of reputation, claims of third parties,
                        damage caused by delay or moral damage) arising out of the use or inability to use
                        the materials on the Website.
                        In particular, Rivo Agency is not liable for damages caused by viruses and other software,
                        and/or that results from accessing or downloading materials that the Website contains.
                        If you decide to download materials from the Website, you do so at your own risk. <br />
                        Because some jurisdictions do not allow limitations on implied warranties, or limitations
                        of liability for consequential or incidental damages, these limitations may not apply to you.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Links</h3>
                    <p className="privacy-bl-text">
                        The Website may contain third party materials or links to other websites.
                        Links to other websites are provided on the Website for your information and convenience only.
                        Rivo Agency has no control over these websites, does not check, oversee, review, approve
                        or endorse its contents. Rivo Agency is not responsible for the availability of these websites,
                        their contents nor for any damage or harm that might be inflicted as a result of accessing
                        those websites. Use of any such linked website is at the user's own risk.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Modification</h3>
                    <p className="privacy-bl-text">
                        Rivo Agency may revise, modify or amend the T&C at any time without notice.
                        By using this Website you agree to be bound by the current version of the T&C.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Breach, Governing Law</h3>
                    <p className="privacy-bl-text">
                        If Rivo Agency becomes aware of a breach of the T&C, Rivo Agency may immediately implement
                        corrective actions, including disabling access to the Website as well as removing any
                        information, data and content provided by the user on the Website at any time, to any
                        extent and without notice. <br />
                        Any claims or disputed relating to the use of Website or a breach
                        of this T&C shall be governed by the laws of the Ukraine without regard
                        to its conflict of law provisions. Any claims and disputes shall be settled
                        by the competent Ukrainian common court, having jurisdiction over Rivo Agency registered seat.
                    </p>
                </article>
                <article>
                    <h2 className="privacy-title privacy-policy-title">Privacy Policy</h2>
                    <p className="privacy-bl-text">
                        The privacy of our website’s users is very important to us, which is why we have developed
                        this Privacy Policy so that you can understand how we collect, process, disclose, and use
                        your personal information.
                    </p>
                    <p className="privacy-bl-text">
                        Rivo Agency. as the Data Controller of the service and personal data ensures that:
                    </p>
                    <ul className="privacy-bl-list" style={{ marginBottom: "24px" }}>
                        <li>
                            Data shall always be collected for specified and clearly defined purposes and
                            to the extent necessary to achieve those purposes.
                        </li>
                        <li>
                            Personal data shall be kept for as long as necessary to achieve these purposes.
                        </li>
                        <li>
                            Personal data shall be collected lawfully and fairly at all times, where appropriate,
                            with the knowledge or consent of the data subject.
                        </li>
                        <li>
                            Personal data is protected with reasonable safeguards against loss or theft, as well
                            as against unauthorized access, disclosure, copying, use or modification.
                        </li>
                        <li>
                            Its clients are provided with information about the rules and practices relating to
                            personal data management.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Article 1. Privacy and Processing Information</h3>
                    <ul className="privacy-bl-list" style={{ marginTop: "24px" }}>
                        <li>
                            The Data Controller of personal data is Rivo Agency. with its registered office in Rivne,
                            1 Melnica Street.
                        </li>
                        <li>
                            Rivo Agency as a personal data Controller (hereinafter referred to as "Controller") pays great
                            attention to the protection of privacy and confidentiality of personal data of Users who make
                            their data available in electronic form through forms available on the website in
                            the domain rivo.agency (hereinafter referred to as "rivo.agency"), the rules of which
                            are specified in the Terms of Use (hereinafter referred to as "Terms of Use") or by
                            registering to meetups and forums organized by Rivo Agency.
                        </li>
                        <li>
                            The Data Protection Officer of Rivo Agency is Nikolas Lishchenko who can
                            be contacted via e-mail: <a href="mailto:nik@rivo.agency">nik@rivo.agency</a>
                        </li>
                        <li>
                            The Controller shall, with due diligence, select and apply appropriate technical
                            and organizational measures to protect personal data being processed. Full access
                            to databases is granted only to persons authorized by the Controller.
                        </li>
                        <li>
                            The Controller protects personal data against unauthorized access and processing
                            in violation of applicable regulations.
                        </li>
                        <li>
                            Visitors to netguru.com can browse through subpages of the website without
                            providing personal data.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title" style={{ marginTop: "24px", marginBottom: "24px" }}>
                        Article 2. Grounds for processing personal data
                    </h3>
                    <ul className="privacy-bl-list">
                        <li>
                            Personal data shall be processed by the Controller in accordance with the law,
                            in particular Regulation (EU) 2016/679 of the European Parliament and of the Council
                            of 27 April 2016 on the protection of individuals with regard to the processing of
                            personal data and on the free movement of such data and repealing Directive 95/46/EC
                            (hereinafter referred to as 'GDPR').
                        </li>
                        <li>
                            Personal data are processed to:
                            <ol className='privacy-bl-list privacy-bl-sublist'>
                                <li>
                                    answer questions addressed to the Controller through the contact forms
                                    available on netguru.com website, including interactive windows available
                                    on each subpage of the website (according to article 6.1.f of the GDPR);
                                </li>
                                <li>
                                    dispatch of marketing content, including information about planned events and workshops,
                                    business information, newsletter or dispatch of eBooks and other information on the basis
                                    of the consent (Article 6(1)(a) of the GDPR);
                                </li>
                                <li>
                                    recruitment, including:
                                    <ol className='privacy-bl-list privacy-bl-subsublist'>
                                        <li>
                                            - to establish and maintain contact with the Candidate in relation
                                            to the application documents submitted, pursuant to Article 6(1)(b)
                                            of the GDPR, i.e. in relation to taking action at the request of
                                            the data subject before concluding a contract,
                                        </li>
                                        <li>
                                            - carrying out and resolving the recruitment process based on Article 6(1)(b)
                                            of the GDPR, i.e. taking the necessary actions at the request of the data
                                            subject before concluding the contract - in the scope of data indicated in
                                            Article 221 §1 of the Labor Code and on the basis of the Candidate's consent,
                                            i.e. Article 6(1)(a) of the GDPR and in the scope of data beyond the catalog
                                            indicated in Article 221 §1 of the Labor Code,
                                        </li>
                                        <li>
                                            - to take account of the Candidate's application documents in future recruitment
                                            processes on the basis of his/her voluntary agreement (Article 6(1)(a) of the GDPR).
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    establishing contact in order to prepare, at the Customer's request, an offer of the
                                    Controller’s services and/or products tailored to the Customer's needs (Art. 6.1.b of the GDPR),
                                </li>
                                <li>
                                    establishing contact in order to prepare, at the Customer's request, an offer of
                                    the Controller’s services and/or products tailored to the Customer's needs
                                    (Art. 6.1.b of the GDPR),
                                </li>
                                <li>
                                    adapting and developing the website's functionalities, including its structure and
                                    content to the needs of Internet users, creating aggregated statistics, and preserving
                                    the security and quality of services provided by the service - based on the legitimate
                                    interest of the Controller (Article 6(1)(f) of the GDPR);
                                </li>
                                <li>
                                    investigation or safeguard against possible claims (according to Article 6(1)(f) of the GDPR);
                                </li>
                                <li>
                                    conducting statistical analysis of information about participants of our events
                                    (according to Article 6 (1) (f) of the GDPR) where the legitimate purpose is to have
                                    information about the statistics which allows us to improve our activities.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Regardless of the purpose of the processing, providing the data is voluntary,
                            however, failure to do so may prevent, depending on the specific case, the conclusion
                            of a contract, use of selected services within the service and its functionality or
                            receipt of marketing content.
                        </li>
                        <li>
                            The User should not provide the Controller with personal data of third parties.
                            In case of transfer of third parties' data, the User is obliged to sign a declaration
                            that s/he has the consent of third parties to transfer the data to the Controller.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title" style={{ marginTop: "24px" }}>
                        Article 3. Scope of processing of personal data
                    </h3>
                    <p className="privacy-bl-text">
                        The Controller processes personal data only to the extent necessary
                        to achieve a strictly defined purpose, in accordance with the information indicated below:
                    </p>
                    <ul className="privacy-bl-list">
                        <li>
                            Sending a message through the contact form, among others: e-mail address
                            and telephone number and all other information that the User will provide
                            of his/her own free will in the addressed message;
                        </li>
                        <li>
                            Sending newsletters, commercial and business information and e-books: name
                            and surname, e-mail address, telephone number, among others;
                        </li>
                        <li>
                            Recruitment: the e-mail address from which the message was sent and
                            the information contained in the application form;
                        </li>
                        <li>
                            Preparation of offers: name and surname, e-mail address, telephone number,
                            and other information contained in the message sent through the contact form;
                        </li>
                        <li>
                            Customization and development of website functionality: IP addresses
                            collected during Internet connections for technical purposes related
                            to server administration.
                        </li>
                    </ul>
                    <p className="privacy-bl-text">
                        The Controller does not make automated decisions on the basis of data collected about Users.
                    </p>
                </article>
                <article>
                    <h3 className="privacy-bl-title">Article 4. Data retention period</h3>
                    <p className="privacy-bl-text">
                        Personal data shall be kept only for the time necessary to achieve the specific
                        purpose for which it was transmitted or to ensure compliance, as set out below:
                    </p>
                    <ul className="privacy-bl-list">
                        <li>
                            Personal data collected for the purpose of answering questions asked
                            via the contact form will be processed no longer than 12 months after the last contact;
                        </li>
                        <li>
                            Data collected for the purpose of sending marketing content, newsletters,
                            commercial and business information and e-books will be processed until
                            the withdrawal of consent by the User;
                        </li>
                        <li>
                            Personal data collected for the purposes of recruitment will be processed
                            for the duration of the recruitment process, and if the Candidate agrees to leave
                            the data for the purposes of future recruitments, they will be stored until the
                            withdrawal of the consent, but not longer than 24 months from the date of its granting;
                        </li>
                        <li>
                            Personal data collected for the purposes of preparing a personalized offer for products
                            and/or services will be processed for the duration of the offer negotiation, and after
                            its completion for 12 months counted from the date of the last contact, or they will
                            feed the Controller’s customer database in order to execute the concluded agreement.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title" style={{ marginTop: "24px" }}>
                        Article 5. Recipients of personal data
                    </h3>
                    <ul className="privacy-bl-list" style={{ marginTop: "24px" }}>
                        <li>
                            Users' data may be made available to entities authorized to receive data
                            in accordance with applicable laws, including relevant judicial authorities.
                        </li>
                        <li>
                            Personal data may be transferred to entities cooperating with the Controller on the basis
                            of appropriate agreements, including selected marketing agencies and partners providing
                            technical services (development and maintenance of IT systems and websites).
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title" style={{ marginTop: "24px" }}>
                        Article 6. Rights of persons
                    </h3>
                    <ul className="privacy-bl-list" style={{ marginTop: "24px" }}>
                        <li>
                            The user is obliged to provide complete, current and up-to-date data.
                        </li>
                        <li>
                            Every user whose personal data is processed by the Controller is entitled to:
                            <ol className="privacy-bl-list privacy-bl-sublist">
                                <li>access the data,</li>
                                <li>correct the data,</li>
                                <li>deletion of the data,</li>
                                <li>restrict the processing of data,</li>
                                <li>transfer the data,</li>
                                <li>
                                    object to the processing of data which takes place on the basis
                                    of the Conotroller’s legitimate interest,
                                </li>
                                <li>
                                    withdraw consent (where processing is based on consent) at any time
                                    without affecting the lawfulness of processing carried out on the basis
                                    of consent before withdrawal.
                                </li>
                            </ol>
                        </li>
                        <li>
                            You can exercise the rights set out in the above section by sending an
                            appropriate request, providing your user name and e-mail
                            address to <a href="mailto:info@rivo.agency">info@rivo.agency</a>
                        </li>
                        <li>
                            The user has the right to appeal to the supervisory authority
                            if he considers that the processing of personal data violates the rules of the GDPR.
                        </li>
                        <li>
                            In order to unsubscribe from the communication, please select "Unsubscribe"
                            button on the bottom of the e-mail you received from us, update email preferences
                            in the second step by unchecking the types of email you do not want to receive and
                            accept the settings. You can also contact us via dpo@netguru.com e-mail.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title" style={{ marginTop: "24px" }}>
                        Article 7. Cookie policy
                    </h3>
                    <p className="privacy-bl-text">
                        Rivo Agency collects data in logs, which are used only for the purposes of
                        service administration, and these data are not transferred to third parties.
                    </p>
                    <ul className="privacy-bl-list">
                        <li>
                            In accordance with established practice, we store HTTP queries addressed to our server.
                            The resources viewed are identified by their URLs. The information collected in the logs is:
                            <ol className="privacy-bl-list privacy-bl-subsublist" style={{ marginLeft: "10px" }}>
                                <li>- The public IP address of the computer from which the query came,</li>
                                <li>- User station name - identification implemented by http protocol, if possible,</li>
                                <li>- User name given during the authorization process,</li>
                                <li>- Time for the inquiry to arrive,</li>
                                <li>- First line of the http request,</li>
                                <li>- The http response code,</li>
                                <li>- The number of bytes sent by the server,</li>
                                <li>
                                    - The URL of the page previously visited by the user, in case the
                                    Company's website was accessed via a link,
                                </li>
                                <li>- Information about your browser,</li>
                                <li>- Information about errors that occurred in the execution of http transactions.</li>
                            </ol>
                        </li>
                        <li>This data is not connected to specific people browsing the Controller’s pages.</li>
                        <li>
                            In order to ensure the highest quality of service, the Controller periodically
                            analyses log files in order to determine which pages are visited most often,
                            which web browsers are used, whether the structure of the site does not contain errors, etc.
                        </li>
                        <li>
                            The collected logs are stored for 24 months as auxiliary material used
                            to administer the service - on the basis of cookie files, statistics may
                            be generated which do not contain any features identifying the persons
                            visiting netguru.com.
                        </li>
                        <li>
                            The following types of cookies are used on the website:
                            <ol className="privacy-bl-list privacy-bl-sublist">
                                <li>security cookies, e.g. used to detect misuse of authentication;</li>
                                <li>"performance" cookies, enabling the collection of information on how to use the website;</li>
                                <li>
                                    "functional" cookies, enabling "remembering" the settings selected
                                    by the User and personalizing the User's interface, e.g. in terms of
                                    the selected language or region from which the User comes from, font size,
                                    appearance of the website, etc.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Cookies are not used to process or store personal data. They cannot be used to
                            directly identify the User and do not make any configuration changes in the browser
                            or telecommunication devices.
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 className="privacy-bl-title" style={{ marginTop: "24px" }}>
                        Article 8. Transfer of data to third countries
                    </h3>
                    <p className="privacy-bl-text">
                        Outside the European Economic Area (EEA), the level of personal data protection
                        differs from that provided by European law (GDPR). Netguru transfers your personal
                        data outside the EEA to third countries only if it is necessary to achieve business
                        purposes (incl. the use of IT tools provided by third country entities) and when the
                        third country ensures an adequate level of protection, in particular through:
                    </p>
                    <ol className="privacy-bl-list privacy-bl-sublist">
                        <li style={{marginBottom: "24px"}}>
                            issued a relevant decision of the European Commission regarding the assurance
                            of an adequate level of protection of Personal Data in that country,
                        </li>
                        <li style={{marginBottom: "24px"}}>
                            the use of standard contractual clauses issued by the European Commission,
                            if a given country does not have a confirmed decision of the European Commission,
                        </li>
                        <li>
                            application of binding corporate rules approved by the competent supervisory authority.
                        </li>
                    </ol>
                </article>
            </div>
        </div>
    )
}

export default Privacy