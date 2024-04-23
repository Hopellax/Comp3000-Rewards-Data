import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function page(props) {
  return (
    <Paper>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
         Pupose of the website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           The purpose of the website is to be informative on exactly how data is being used by external companies and give you a way to control over exactly what information you're sharing and earn from your data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            How do we keep your data secure? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <p> We use AES encryption to ensure that your data is kept safe. </p>
        <p> We also provide full transparency on how we use your data so there are no surpises.</p>
             </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          What if I change my mind?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p> You reserve the right to withdraw your information at any time for any reason, we will never use your data without your consent. </p>         </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            What are the benefits?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <p> You get to learn all about how companies use your data and take control over your personal information online </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  )
}

export default page;