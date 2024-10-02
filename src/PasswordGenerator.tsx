import { useState } from "react";

//@ts-ignore
export const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>(''); //firstly set a state for storing the password
  const [copied, setCopied] = useState<boolean>(false); // set another state to copy the password

  //function to generate the password
  const generatePassword = () => {
    //well what do we really want to use for the passwords
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()-_=+";

    const allCharacters = lowerCase + upperCase + numbers + symbols;
    //total characters for password


    // maths and logic to generate password
    const generateRandomPassword = (length: number): string => {
      let newPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomIndex];
      }
      return newPassword;
    };

    //commands to store the passowrd of length 12
    const newPassword = generateRandomPassword(12);
    setPassword(newPassword);
    setCopied(false); // Reset the copied state whenever a new password is generated

  };
  //copy the password 
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
      });
    }
  };

  
  return (
    <center>
    <div className="flex justify-center">
  <div className="flex justify-center">
    <h2>Password Generator</h2>
    <div>
      <div>
        <button onClick={generatePassword}>
          Generate Password
        </button>
        {password && (
          <>
            <button onClick={copyToClipboard}>Copy Password</button>
                    <br/>
            {copied && <span style={{ marginLeft: '10px', color: 'green' }}>Copied!</span>}
          </>
        )}
      </div>
      <p style={{ fontSize: '20px', wordBreak: 'break-all' }}>{password}</p>
    </div>
  </div>
  </div>
  </center>
    );
};

//@ts-ignore
export default PasswordGenerator;
