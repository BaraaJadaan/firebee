import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Text, Divider } from '@chakra-ui/react';

function FAQ() {
  const faqs = [
    {
      question: "Is Firebee Safe?",
      answer: "Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety."
    },
    {
      question: "How Does Firebee work?",
      answer: (
        <Text>
          Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.<br/><br/>
          Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It's a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.<br/><br/>
          Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize.<br/><br/>
          Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake.<br/><br/>
          Firebee signal is 3000 times less powerful than a smartphone and completely safe to use.
        </Text>
      )
    },
    {
      question: "Will Firebee Fit on My Head?",
      answer: "Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head."
    },
    {
      question: "What If I want the signal to stop?",
      answer: "Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes."
    },
    {
      question: "How do you charge Firebee?",
      answer: "Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in."
    }
  ];

  return (
    <Box p={8} pt={20} mt={10} textAlign="center" maxW="800px" mx="auto">
      {/* Title */}
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="gray.700" mb={8}>
        Frequently Asked Questions
      </Heading>

      {/* Accordion for FAQs */}
      <Accordion allowToggle>
      <Divider borderWidth="1px" borderColor="black" />

        {faqs.map((faq, index) => (
          <Box key={index}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                    {faq.answer}
              </AccordionPanel>
            </AccordionItem>
            <Divider borderWidth="1px" borderColor="black" />
          </Box>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQ;
