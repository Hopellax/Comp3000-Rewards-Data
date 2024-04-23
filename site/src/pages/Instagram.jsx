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
        <h3>Instagrams Data Practices</h3>
        <p>
        Instagram states it does not take ‘ownership’ of uploaded content. However, the T&Cs state “non-exclusive, fully paid, transferable, sub-licensable, worldwide license to use their content” – This means that the moment a user uploads any kind of content to Instagram, Instagram automatically have all the rights as the original owner. 
        </p>
        <p>
        As stated above, Instagram can sub-license any content that you have uploaded without permission from the original owner or paying royalties. Instagram can also sell these rights to a third party allowing them to do as they wish with the content. 
        </p>
      </body>
    </html>
  );
}

export default Page;
