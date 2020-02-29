import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_URL =
  "https://fitness.us4.list-manage.com/subscribe/post?u=50e805064958502d88ae939bc&id=36c73f6366";

const MailchimpCompoent = () => {
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status }) => (
        <CustomForm
          status={status}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

const CustomForm = ({ status, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div
      id="signup"
      className="mb-8 border-b-2 border-gray-500 flex items-center py-2 px-1"
    >
      {status === "sending" && (
        <div className="text-primary-700 text-center w-full">Submitting...</div>
      )}
      {status === "error" && (
        <div className="text-red-700 text-center w-full">
          You are already subscribed!
        </div>
      )}
      {status === "success" && (
        <div className="text-green-700 text-center w-full">
          Success! Welcome to the Squad!
        </div>
      )}
      {!status && (
        <>
          <input
            ref={node => (email = node)}
            type="email"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none -mb-1"
            placeholder="Join our pre-launch tests"
          />
          <button
            className="flex-shrink-0 bg-primary-500 hover:bg-primary-700  text-white py-1 px-3 rounded-lg"
            type="button"
            onClick={submit}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default MailchimpCompoent;
