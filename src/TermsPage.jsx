import React from 'react';

export default function TermsPage({ onNavigateHome, onOpenModal }) {
  const sections = [
    {
      id: "section-1",
      number: "1.",
      title: "1. Application and entire agreement",
      clauses: [
        {
          num: "1.1",
          text: "These Terms and Conditions apply to the provision of the good & services detailed in our quotation (Services) by Optimus Networks ltd a company registered in England and Wales under number 10191532 whose registered office is at Bank House, Market Square, Congleton, Cheshire, CW12 1ET (we or us) to the person buying the services (you)."
        },
        {
          num: "1.2",
          text: "You are deemed to have accepted these Terms and Conditions when you accept our quotation or from the date of any performance of the Services (whichever happens earlier) and these Terms and Conditions and our quotation (the Contract) are the entire agreement between us."
        },
        {
          num: "1.3",
          text: "You acknowledge that you have not relied on any statement, promise or representation made or given by or on our behalf. These Conditions apply to the Contract to the exclusion of any other terms that you try to impose or incorporate, or which are implied by trade, custom, practice or course of dealing."
        }
      ]
    },
    {
      id: "section-2",
      number: "2.",
      title: "2. Interpretation",
      clauses: [
        {
          num: "2.1",
          text: 'A "business day" means any day other than a Saturday, Sunday or bank holiday in England and Wales.'
        },
        {
          num: "2.2",
          text: "The headings in these Terms and Conditions are for convenience only and do not affect their interpretation."
        },
        {
          num: "2.3",
          text: "Words imparting the singular number shall include the plural and vice-versa."
        }
      ]
    },
    {
      id: "section-3",
      number: "3.",
      title: "3. Services",
      clauses: [
        {
          num: "3.1",
          text: "We warrant that we will use reasonable care and skill in our performance of the Services which will comply with the quotation, including any specification in all material respects. We can make any changes to the Services which are necessary to comply with any applicable law or safety requirement, and we will notify you if this is necessary."
        },
        {
          num: "3.2",
          text: "We will use our reasonable endeavours to complete the performance of the Services within the time agreed or as set out in the quotation; however, time shall not be of the essence in the performance of our obligations."
        },
        {
          num: "3.3",
          text: "All of these Terms and Conditions apply to the supply of any goods as well as Services unless we specify otherwise."
        },
        {
          num: "3.4",
          text: "Pre-allocated Professional Services time (Pool Time) purchases are valid for 12 months from the date of purchase, after which they will expire."
        }
      ]
    },
    {
      id: "section-4",
      number: "4.",
      title: "4. Your obligations",
      clauses: [
        {
          num: "4.1",
          text: "You must obtain any permissions, consents, licences or otherwise that we need and must give us with access to any and all relevant information, materials, properties and any other matters which we need to provide the Services."
        },
        {
          num: "4.2",
          text: "If you do not comply with the above clause, we can terminate the Services."
        },
        {
          num: "4.3",
          text: "We are not liable for any delay or failure to provide the Services if this is caused by your failure to comply with the provisions of this section (Your obligations)."
        }
      ]
    },
    {
      id: "section-5",
      number: "5.",
      title: "5. Fees",
      clauses: [
        {
          num: "5.1",
          text: "The fees (Fees) for the Services are set out in the quotation and are on a time and materials basis."
        },
        {
          num: "5.2",
          text: "In addition to the Fees, we can recover from you:",
          subItems: [
            "(a) reasonable incidental expenses including, but not limited to, travelling expenses, hotel costs, subsistence and any associated expenses,",
            "(b) the cost of services provided by third parties and required by us for the performance of the Services, and",
            "(c) the cost of any materials required for the provision of the Services."
          ]
        },
        {
          num: "5.3",
          text: "You must pay us for any additional services provided by us that are not specified in the quotation in accordance with our then current, applicable hourly rate in effect at the time of performance or such other rate as may be agreed between us. The provisions of the above clause also apply to these additional services."
        },
        {
          num: "5.4",
          text: "The Fees are exclusive of any applicable VAT and other taxes or levies which are imposed or charged by any competent authority."
        }
      ]
    },
    {
      id: "section-6",
      number: "6.",
      title: "6. Cancellation and amendment",
      clauses: [
        {
          num: "6.1",
          text: "We can withdraw, cancel or amend a quotation if it has not been accepted by you, or if the Services have not started, within a period of 30 days from the date of the quotation, (unless the quotation has been withdrawn)."
        },
        {
          num: "6.2",
          text: "Either we or you can cancel an order for any reason prior to your acceptance (or rejection) of the quotation."
        },
        {
          num: "6.3",
          text: "If you want to amend any details of the Services you must tell us in writing as soon as possible. We will use reasonable endeavours to make any required changes and additional costs will be included in the Fees and invoiced to you."
        },
        {
          num: "6.4",
          text: "If, due to circumstances beyond our control, including those set out in the clause below (Circumstances beyond a party's control), we have to make any change in the Services or how they are provided, we will notify you immediately. We will use reasonable endeavours to keep any such changes to a minimum."
        }
      ]
    },
    {
      id: "section-7",
      number: "7.",
      title: "7. Payment",
      clauses: [
        {
          num: "7.1",
          text: "We will invoice you for payment of Fees either:",
          subItems: [
            "(a) upon acceptance of your order if hardware has been purchased; or",
            "(b) when we have completed the Services; or",
            "(c) on the invoice dates set out in the quotation."
          ]
        },
        {
          num: "7.2",
          text: "You must pay the Fees due within 30 days of the date of our invoice or otherwise in accordance with any credit terms agreed between us."
        },
        {
          num: "7.3",
          text: "Time for payment shall be of the essence of the Contract."
        },
        {
          num: "7.4",
          text: "Without limiting any other right or remedy we have for statutory interest, if you do not pay within the period set out above, we will charge you interest at the rate of 4% per annum above the base lending rate of the Bank of England from time to time on the amount outstanding until payment is received in full."
        },
        {
          num: "7.5",
          text: "All payments due under these Terms and Conditions must be made in full without any deduction or withholding except as required by law and neither of us can assert any credit, set-off or counterclaim against the other in order to justify withholding payment of any such amount in whole or in part."
        },
        {
          num: "7.6",
          text: "If you do not pay within the period set out above, we can suspend any further provision of the Services and cancel any future services which have been ordered by, or otherwise arranged with, you."
        },
        {
          num: "7.7",
          text: "Receipts for payment will be issued by us only at your request."
        },
        {
          num: "7.8",
          text: "All payments must be made in British Pounds unless otherwise agreed in writing between us."
        }
      ]
    },
    {
      id: "section-8",
      number: "8.",
      title: "8. Sub-Contracting and assignment",
      clauses: [
        {
          num: "8.1",
          text: "We can at any time assign, transfer, charge, subcontract or deal in any other manner with all or any of our rights under these Terms and Conditions and can subcontract or delegate in any manner any or all of our obligations to any third party."
        },
        {
          num: "8.2",
          text: "You must not, without our prior written consent, assign, transfer, charge, subcontract or deal in any other manner with all or any of your rights or obligations under these Terms and Conditions."
        },
        {
          num: "8.3",
          text: "Where we provide hardware or software maintenance services to you, such services will be subject to the terms of the Service Level Agreement (SLA) between us and the third party provider. Notwithstanding the foregoing, the terms and conditions of any Support SLA between us (the supplier) and you shall take precedence, and the SLA with the third party provider shall only come into effect subsequent to and in accordance with the terms of our SLA with you. Where no support agreement with an SLA exists between us (the supplier) and you, initial triage will be provided on a reasonable endeavours basis before engaging any third party provider. You acknowledge and agree that our obligations with respect to the maintenance services are limited to the terms set out in the SLA with the third party provider."
        }
      ]
    },
    {
      id: "section-9",
      number: "9.",
      title: "9. Termination",
      clauses: [
        {
          num: "9.1",
          text: "We can terminate the provision of Services immediately if you:",
          subItems: [
            "(a) commit a material breach of your obligations under these Terms and Conditions; or",
            "(b) fail to make pay any amount due under the Contract on the due date for payment; or",
            "(c) are or become or, in our reasonable opinion, are about to become, the subject of a bankruptcy order or take advantage of any other statutory provision for the relief of insolvent debtor; or",
            "(d) enter into a voluntary arrangement under Part 1 of the Insolvency Act 1986, or any other scheme or arrangement is made with its creditors; or",
            "(e) convene any meeting of your creditors, enter into voluntary or compulsory liquidation, have a receiver, manager, administrator or administrative receiver appointed in respect of your assets or undertakings or any part of them, any documents are filed with the court for the appointment of an administrator in respect of you, notice of intention to appoint an administrator is given by you or any of your directors or by a qualifying floating charge holder (as defined in para. 14 of Schedule B1 of the Insolvency Act 1986), a resolution is passed or petition presented to any court for your winding up or for the granting of an administration order in respect of you, or any proceedings are commenced relating to your insolvency or possible insolvency."
          ]
        }
      ]
    },
    {
      id: "section-10",
      number: "10.",
      title: "10. Intellectual property",
      clauses: [
        {
          num: "10.1",
          text: "We reserve all copyright and any other intellectual property rights which may subsist in any goods supplied in connection with the provision of the Services. We reserve the right to take any appropriate action to restrain or prevent the infringement of such intellectual property rights."
        }
      ]
    },
    {
      id: "section-11",
      number: "11.",
      title: "11. Liability and indemnity",
      clauses: [
        {
          num: "11.1",
          text: "Our liability under these Terms and Conditions, and in breach of statutory duty, and in tort or misrepresentation or otherwise, shall be limited as set out in this clause."
        },
        {
          num: "11.2",
          text: "The total amount of our liability is limited to the total amount of Fees payable by you under the Contract."
        },
        {
          num: "11.3",
          text: "We are not liable (whether caused by our employees, agents or otherwise) in connection with our provision of the Services or the performance of any of our other obligations under these Terms and Conditions or the quotation for:",
          subItems: [
            "(a) any indirect, special or consequential loss, damage, costs, or expenses or;",
            "(b) any loss of profits; loss of anticipated profits; loss of business; loss of data; loss of reputation or goodwill; business interruption; or, other third party claims; or",
            "(c) any failure to perform any of our obligations if such delay or failure is due to any cause beyond our reasonable control; or",
            "(d) any losses caused directly or indirectly by any failure or your breach in relation to your obligations; or",
            "(e) any losses arising directly or indirectly from the choice of Services and how they will meet your requirements or your use of the Services or any goods supplied in connection with the Services."
          ]
        },
        {
          num: "11.4",
          text: "You must indemnify us against all damages, costs, claims and expenses suffered by us arising from any loss or damage to any equipment (including that belonging to third parties) caused by you or your agents or employees."
        },
        {
          num: "11.5",
          text: "Nothing in these Terms and Conditions shall limit or exclude our liability for death or personal injury caused by our negligence, or for any fraudulent misrepresentation, or for any other matters for which it would be unlawful to exclude or limit liability."
        }
      ]
    },
    {
      id: "section-12",
      number: "12.",
      title: "12. Data Protection",
      clauses: [
        {
          num: "12.1",
          text: "When supplying the Services to the Customer, the Service Provider may gain access to and/or acquire the ability to transfer, store or process personal data of employees of the Customer."
        },
        {
          num: "12.2",
          text: "The parties agree that where such processing of personal data takes place, the Customer shall be the 'data controller' and the Service Provider shall be the 'data processor' as defined in the General Data Protection Regulation (GDPR) as may be amended, extended and/or re-enacted from time to time."
        },
        {
          num: "12.3",
          text: "For the avoidance of doubt, 'Personal Data', 'Processing', 'Data Controller', 'Data Processor' and 'Data Subject' shall have the same meaning as in the GDPR."
        },
        {
          num: "12.4",
          text: "The Service Provider shall only Process Personal Data to the extent reasonably required to enable it to supply the Services as mentioned in these terms and conditions or as requested by and agreed with the Customer, shall not retain any Personal Data longer than necessary for the Processing and refrain from Processing any Personal Data for its own or for any third party's purposes."
        },
        {
          num: "12.5",
          text: "The Service Provider shall not disclose Personal Data to any third parties other than employees, directors, agents, sub-contractors or advisors on a strict 'need-to-know' basis and only under the same (or more extensive) conditions as set out in these terms and conditions or to the extent required by applicable legislation and/or regulations."
        },
        {
          num: "12.6",
          text: "The Service Provider shall implement and maintain technical and organisational security measures as are required to protect Personal Data Processed by the Service Provider on behalf of the Customer."
        },
        {
          num: "12.7",
          text: (
            <span>
              Further information about the Service Provider's approach to data protection are specified in its Data Protection Policy, which can be found on our website. For any enquiries or complaints regarding data privacy, you can contact our Data Protection Officer at the following e-mail address:{" "}
              <a href="mailto:info@optimusnetworks.co.uk" className="text-[#0b5cd5] hover:underline font-[500]">
                info@optimusnetworks.co.uk
              </a>.
            </span>
          )
        }
      ]
    },
    {
      id: "section-13",
      number: "13.",
      title: "13. Circumstances beyond a party's control",
      clauses: [
        {
          num: "13.1",
          text: "Neither of us is liable for any failure or delay in performing our obligations where such failure or delay results from any cause that is beyond the reasonable control of that party. Such causes include, but are not limited to: power failure, Internet Service Provider failure, industrial action, civil unrest, fire, flood, storms, earthquakes, acts of terrorism, acts of war, governmental action or any other event that is beyond the control of the party in question. If the delay continues for a period of 90 days, either of us may terminate or cancel the Services to be carried out under these Terms and Conditions."
        }
      ]
    },
    {
      id: "section-14",
      number: "14.",
      title: "14. Communications",
      clauses: [
        {
          num: "14.1",
          text: "All notices under these Terms and Conditions must be in writing and signed by, or on behalf of, the party giving notice (or a duly authorised officer of that party)."
        },
        {
          num: "14.2",
          text: "Notices shall be deemed to have been duly given:",
          subItems: [
            "(a) when delivered, if delivered by courier or other messenger (including registered mail) during the normal business hours of the recipient;",
            "(b) when sent, if transmitted by fax or email and a successful transmission report or return receipt is generated;",
            "(c) on the fifth business day following mailing, if mailed by national ordinary mail; or",
            "(d) on the tenth business day following mailing, if mailed by airmail."
          ]
        },
        {
          num: "14.3",
          text: "All notices under these Terms and Conditions must be addressed to the most recent address, email address or fax number notified to the other party."
        }
      ]
    },
    {
      id: "section-15",
      number: "15.",
      title: "15. No waiver",
      clauses: [
        {
          num: "15.1",
          text: "No delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy nor stop further exercise of any other right, or remedy."
        }
      ]
    },
    {
      id: "section-16",
      number: "16.",
      title: "16. Severance",
      clauses: [
        {
          num: "16.1",
          text: "If one or more of these Terms and Conditions is found to be unlawful, invalid or otherwise unenforceable, that / those provisions will be deemed severed from the remainder of these Terms and Conditions (which will remain valid and enforceable)."
        }
      ]
    },
    {
      id: "section-17",
      number: "17.",
      title: "17. Law and jurisdiction",
      clauses: [
        {
          num: "17.1",
          text: "This Agreement shall be governed by and interpreted according to the law of England and Wales and all disputes arising under the Agreement (including non-contractual disputes or claims) shall be subject to the exclusive jurisdiction of the English and Welsh courts."
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#e8eaed] bg-white">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb / Back Navigation */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#4b5563] hover:text-[#0b5cd5] transition-colors mb-6 cursor-pointer group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path
                d="M10 12.5L5.5 8 10 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to Home</span>
          </button>

          <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-2 block">
            LEGAL & POLICIES
          </span>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.1em] mb-4">
            Terms & Conditions
          </h1>

          <p className="text-[14px] sm:text-[15px] font-[400] text-[#4b5563] leading-[1.6em]">
            Optimus Networks Ltd · Company registered in England and Wales under No. 10191532 · Registered office: Bank House, Market Square, Congleton, Cheshire, CW12 1ET
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10 sm:gap-12">
            {sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="flex flex-col gap-4 scroll-mt-24 pb-8 sm:pb-10 border-b border-[#f0f2f5] last:border-b-0"
              >
                {/* Heading with exact user requested font-size: 28px, weight: 600 */}
                <h2 className="text-[24px] sm:text-[28px] font-[600] tracking-[-0.025em] text-[#0a0a0a] leading-[1.25em]">
                  {sec.title}
                </h2>

                <div className="flex flex-col gap-3.5 text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.65em]">
                  {sec.clauses.map((c, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <p className="text-[#4b5563]">
                        {typeof c.text === 'string' ? (
                          <>
                            <span className="text-[#0a0a0a] font-[500] mr-2">{c.num}</span>
                            {c.text.replace(new RegExp(`^${c.num}\\s*`), '')}
                          </>
                        ) : (
                          <>
                            <span className="text-[#0a0a0a] font-[500] mr-2">{c.num}</span>
                            {c.text}
                          </>
                        )}
                      </p>

                      {c.subItems && (
                        <div className="pl-4 sm:pl-6 space-y-2 mt-1 border-l-2 border-[#e8eaed]">
                          {c.subItems.map((sub, sIdx) => (
                            <p key={sIdx} className="text-[#4b5563] text-[14px] sm:text-[15px]">
                              {sub}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Help / Consultation Card */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[16px] bg-[#fafafa] border border-[#e8eaed] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-[18px] font-[600] text-[#0a0a0a] tracking-[-0.02em] mb-1">
                Have questions about our terms or services?
              </h3>
              <p className="text-[14px] text-[#4b5563]">
                Our team is always available to assist with contract questions or commercial inquiries.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="min-h-[44px] px-4 rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[15px] tracking-[-0.02em] whitespace-nowrap cursor-pointer transition-colors shadow-xs active:scale-[0.99]"
              >
                Contact Sales
              </button>
              <a
                href="tel:+443330164050"
                className="min-h-[44px] px-4 rounded-[4px] border border-[#e8eaed] hover:border-slate-300 bg-white text-[#0a0a0a] font-[500] text-[15px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
