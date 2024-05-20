# Bolt - Chat with PDF Platform

Bolt is an innovative platform that allows users to upload PDFs and interact with them through a chat interface. Built with Next.js, TypeScript, and TailwindCSS, Bolt offers a seamless and responsive user experience. It leverages advanced technologies like Pinecone for vector storage, OpenAI for natural language processing, and Stripe for subscription management, providing both Free and Pro versions. Whether you need to extract information or simply interact with your documents more intuitively, Bolt transforms the way you engage with PDFs.

## Technologies

- **Frameworks & Libraries**: Next.js, TypeScript, TailwindCSS, Mantine/hooks, react-pdf, react-dropzone, react-resize-detector, react-hook-form, hookform/resolvers, simplebar-react, react-textarea-autosize
- **UI Components**: shadcn-ui, lucide-react
- **Authentication**: @kinde-oss/kinde-auth-nextjs
- **Communication**: tRPC
- **Database**: Prisma, Neon.tech
- **Vector Database**: Pinecone, @pinecone-database/pinecone
- **Natural Language Processing**: Langchain, OpenAI
- **Payment Processing**: Stripe
- **Utilities**: react-loading-skeleton, date-fns

## Features

- Upload PDFs and interact with them through a chat interface.
- Two versions: Free and Pro.
- User authentication using Kinde.
- Secure and scalable vector storage with Pinecone.
- Natural language understanding and responses powered by OpenAI.
- Subscription management with Stripe.
- Responsive and modern UI with TailwindCSS and Shadcn UI components.

## The Process

Developing "Bolt" was an exciting journey. I started by outlining the core functionality: enabling users to upload and interact with PDFs via a chat interface. Here’s a step-by-step breakdown of the process:

1. **Planning**: I drafted the project scope, user stories, and designed the system architecture.
2. **Setup**: Initialized the project using Next.js with TypeScript, and set up TailwindCSS for styling.
3. **Authentication**: Integrated user authentication with @kinde-oss/kinde-auth-nextjs.
4. **Backend Development**: Set up tRPC for seamless client-server communication and Prisma with Neon.tech for database management.
5. **Vector Database**: Integrated Pinecone for efficient vector storage and retrieval.
6. **NLP Integration**: Used Langchain and OpenAI to enable natural language processing capabilities.
7. **Frontend Development**: Built the user interface with shadcn-ui and lucide-react, and added various interactive components using Mantine/hooks.
8. **File Handling**: Implemented file upload and PDF rendering with react-dropzone and react-pdf.
9. **Responsive Design**: Ensured responsiveness using TailwindCSS and additional components like react-resize-detector.
10. **Forms**: Managed form states and validations with react-hook-form and hookform/resolvers.
11. **Enhancements**: Added utilities like react-loading-skeleton for loading states, date-fns for date handling, and simplebar-react for custom scrollbars.
12. **Subscription Management**: Integrated Stripe for handling Pro subscriptions.
13. **Testing & Debugging**: Rigorously tested the application to ensure robustness and smooth user experience.

## What I Have Learned

- Effective integration of various libraries and frameworks to create a cohesive application.
- Efficient state management and form handling in React.
- Implementing authentication and subscription models in a web application.
- Using vector databases and natural language processing to enhance application functionality.

## How Can It Be Improved

- Implement additional NLP models to support more complex queries.
- Enhance the PDF parsing capabilities to better handle various formats and structures.
- Improve the UI/UX based on user feedback and usability testing.
- Add support for more file types beyond PDFs.
- Implement more robust error handling and logging mechanisms.

## Running the Project

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/bolt.git
   cd bolt

   ```

2. **Clone the repository**:

   ```bash
   npm install

   ```

3. **Set up environment variables**:
   Create a .env file in the root directory and add your environment variables. Refer to .env.example for required variables.

4. **Initialize the database**:

   ```
   npx prisma init
   ```

   ```
   npx prisma migrate dev
   ```

5. **Start the development server**:
   ```
   npm run dev
   ```

## Demo Video

https://github.com/HuzaifaIlyas02/Amazon-Clone/assets/86406012/b7dec3c5-07b1-4a9a-a82c-f18b94ee5b54

Feel free to contribute, report issues, or suggest improvements!
