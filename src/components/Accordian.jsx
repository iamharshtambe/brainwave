import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    title: 'What is the difference between frontend and backend development ?',
    text: 'Frontend development focuses on the user interface and experience, using technologies like HTML, CSS, and JavaScript. Backend development handles the server-side logic, databases, and APIs using languages like Node.js, Python, or PHP.',
  },
  {
    title: 'Which programming languages should I learn for web development ?',
    text: 'For frontend, learn HTML, CSS, and JavaScript. For backend, popular choices include JavaScript (Node.js), Python, Ruby, PHP, and Java. It also helps to know SQL for working with databases.',
  },
  {
    title: 'What is responsive web design ?',
    text: 'Responsive design ensures a website looks and functions well on all devices, from mobile phones to desktops. Its achieved using flexible layouts, media queries, and relative units like percentages.',
  },
  {
    title: 'How does web hosting work ?',
    text: 'Web hosting provides space on a server to store your websites files so it can be accessed via the internet. Hosting services include shared, VPS, and dedicated hosting, depending on your needs.',
  },
  {
    title: 'What is an API and how is it used in web development ?',
    text: 'An API (Application Programming Interface) allows different software systems to communicate. In web development, APIs are used to fetch or send data between the frontend and backend, or to integrate third-party services.',
  },
];

export default function Accordian() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8">
      <h1 className="mb-4 font-bitcount text-2xl text-white sm:text-3xl md:text-4xl">
        Accordian
      </h1>
      <div className="w-full max-w-[800px]">
        <div>
          {faqs.map((faq) => (
            <AccordianItem key={faq.title} title={faq.title} text={faq.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordianItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`my-3 w-full rounded-2xl border p-4 text-white ${isOpen ? 'border-green-500' : 'border-white'} `}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg">{title}</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {isOpen && (
        <>
          <hr className="my-2 border-green-500" />
          <div>{text}</div>
        </>
      )}
    </div>
  );
}
