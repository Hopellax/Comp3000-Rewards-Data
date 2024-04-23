import React from "react";

function Page(props) {
  return (
    <html>
      <head>
        <style>
          {`
            h3 {
              text-align: center;
            }
          `}
        </style>
      </head>
      <body>
        <h3>Snapchat Data Practices</h3>
        <p>
          Snapchat keeps a log of all user activity, including messages that users believe have been deleted or expired. When you navigate to Snapchat settings and access "My Data," you'll find a range of downloadable information.
        </p>
        <p>
          This data includes deleted or expired messages, which contradicts the common perception that Snapchat content disappears permanently. Snapchat retains this information, citing the "Right to know what personal information we collect and correct it."
        </p>
        <p>
          It's essential to recognize that Snapchat employees have access to user data. In 2019, reports surfaced about employee misuse of data tools. These tools allowed employees to view saved snaps, phone numbers, email addresses, and location data. While Snapchat collects this data for law enforcement purposes, instances of misuse have been documented.
        </p>
        <p>
          Transparency and awareness are crucial when using any social media platform, including Snapchat.
        </p>
      </body>
    </html>
  );
}

export default Page;
