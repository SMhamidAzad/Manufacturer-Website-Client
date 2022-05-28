import React from 'react';
import { GiNotebook } from 'react-icons/gi';

const Blogs = () => {
    return (
        <div className='mx-8 my-8 font-mono'>
            <div className='mb-5 border-2 border-indigo-600 p-2 rounded'>
                <h1 className='text-xl font-medium flex'>
                <GiNotebook className='text-2xl'/>
                   <span className='pl-3'> How will you improve the performance of a React Application?</span></h1>
                <p>Improving application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged. We can improve react application performance following below rules:</p>
                <ul> 1. Understanding how React updates its UI</ul>
                <ul> 2. Windowing or list virtualization in React.</ul>
                <ul> 3. Memoizing React components to prevent unnecessary re-renders</ul>
                <ul> 4. Using the useCallBack, useMemo Hook</ul>
                <ul> 5. We should Keep component state local where necessary.</ul>
            </div>
            <div className='mb-5 border-2 border-indigo-600 p-2 rounded'>
                <h1 className='text-xl font-medium flex'> 
                <GiNotebook className='text-2xl'/>
               <span className='pl-3'> What are the different ways to manage a state in a React application?</span></h1>
                <p>React application has four main state. They are Local state, global state, servar state, url state.Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. Global state is data we manage across multiple components. Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='mb-5 border-2 border-indigo-600 p-2 rounded'>
                <h1 className='text-xl font-medium flex'> 
                <GiNotebook className='text-2xl'/>
                <span className='pl-3'>How does prototypical inheritance work?</span></h1>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            </div>
            <div className='mb-5 border-2 border-indigo-600 p-2 rounded'>
                <h1 className='text-xl font-medium flex'> 
                <GiNotebook className='text-4xl'/>
               <span className='pl-3'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</span></h1>
                <p>We should not update the state directly because - </p>
                <p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. If you update it directly, calling the setState() afterward may just replace the update you made. You will lose control of the state across all components.</p>
            </div>
            <div className='mb-5 border-2 border-indigo-600 p-2 rounded'>
                <h1 className='text-xl font-medium flex'>
                <GiNotebook className='text-2xl'/>
                    <span className='pl-3'>What is a unit test? Why should write unit tests?</span></h1>
                <p><b>Unit test</b> is a type of software testing where individual units or components of a software are tested. A unit may be an individual function, method, procedure, module, or object. Unit Testing is done during the development (coding phase) of an application by the developers. In a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p><br />
                <p>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            </div>
        </div>
    );
};

export default Blogs;