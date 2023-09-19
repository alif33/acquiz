"use client";
import { useEffect, useState } from 'react';
import RadioImage from '@/components/cards/RadioImage';
import RadioText from '@/components/cards/RadioText';
import BoolCard from '@/components/cards/Bool';
import { useRouter } from 'next/navigation';
import Input from '@/components/cards/Input';
import TextArea from '@/components/cards/TextArea';
import Submit from '@/components/cards/Submit';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Http from '@/lib/Http';
import toast from 'react-hot-toast';

export default function Home() {
  const [answers, setAnswers] = useState([]);
  const [active, setActive] = useState(0);
  const [userMail, setUserMail] = useState("");
  const [gridCols, setGridCols] = useState("grid-cols-2");

  const router = useRouter();
  const data = [
    { type: "rimg", title: "Which best describes you?*", options:[
      {value: "I own a business", img: "/img/options/home.png"}, 
      {value: "I want to start a business", img: "/img/options/rocket.png"}
    ]},
    { type: "rimg", title: "Where is your business based?*", options:[
      {value: "USA", img: "/img/countries/USA.png"}, 
      {value: "Canada", img: "/img/countries/canada.png"}, 
      {value: "Other", img: "/img/countries/others.png"}, 
    ]},
    { type: "rtext", title: "What type of business do you have?", options:[
      {value: "Service"}, 
      {value: "Ecommerce"},
      {value: "E-learning"},
      {value: "Brick & Motor"},
      {value: "Software"},
      {value: "Other"}
    ]},
    { type: "bool", title: "Are you a full or part owner of the company and can you decide how to allocate equity?*", options:[
      {value: "Yes"}, 
      {value: "No"}
    ]},
    { type: "input", title: "Which best describes you?*", options:[
      {field: "email", full: false}, 
      {field: "phone", full: false},
      {field: "address", full: true}
    ]},
    { type: "rtext", title: "What type of business do you have?", options:[
      {value: "Service"}, 
      {value: "Ecommerce"},
      {value: "E-learning"},
      {value: "Brick & Motor"},
      {value: "Software"},
      {value: "Other"}
    ]},
    { type: "textarea", title: "Write a description", options:[
      {field: "description", full: true}, 
    ]},
    { type: "submit", title: "Drop your Email*", options:[
      {field: "email", full: true}, 
    ]},
    
  ]


  const handleChange = ({context, answer}) =>{
    if(answers[active]?.answer !== answer){
      const __ = [...answers];
      __[active] = {context, answer};
      setAnswers(__);
      if (active < data.length-1) {
        setActive(active + 1)
      }
    }
  }


  const handleOnChange = e=>{
    const __ = [...answers];
      __[active] = {
        ...__[active],
        [`${e.target.name}`]: e.target.value
      };
      setAnswers(__);
  }

  const handleSubmit = ()=>{
    Http('post', '/submit', {
      email: userMail,
      data: answers
    }).then(res=>{
      if(res.success){
        toast.success(`${res.message}`);
        router.push("/submit");
      }
    })
  }

  const handleNext = () => {
    if (active < data.length-1) {
      if (data[active].type === "input") {
        const __current = answers[active];
    
        for (const option of data[active].options) {
          const { field } = option;
          
          if (!__current || !__current[field]) {
            console.log(`Field "${field}" is empty.`);
            return;
          }else{
            setActive(active + 1)
          }
        }
      }else{
        setActive(active + 1)
      }
    }else{
      if(data[active].type === "submit"){
        handleSubmit();
      }
    }
  }
  
  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1)
    }
  }
  
  const radio = data[active].type==="rimg" || data[active].type==="rtext"? true: false
  const free = data[active].type==="input" || data[active].type==="textarea" || data[active].type==="bool" || data[active].type==="submit"? true: false

  useEffect(() => {
    if (data[active].type==="rimg") {
      switch (data[active].options.length) {
        case 2:
          setGridCols("grid-cols-2");
          break;
        case 3:
          setGridCols("grid-cols-3");
          break;
        default:
          setGridCols("grid-cols-4");
          break;
      }
    }
    if(data[active].type==="rtext" || data[active].type==="bool"){
      setGridCols("grid-cols-2");
    }
  }, [active]);

  console.log(answers)
  
  return (
    <main className="flex min-h-screen">
      <div className="w-full sm:w-full md:w-8/12 mx-auto">
        <h1 className="text-center text-2xl font-bold py-5">DO YOU WANT TO SCALE YOUR BUSINESS?</h1>
        <h3 className="text-center">{"We're looking to invest in one great business per month. Will it be yours?"}</h3>
          <div className="bg-white shadow-xl mt-4 rounded-xl">
            <h1 className="text-center text-2xl py-5">{data[active].title}</h1>
            {
              radio && (<div className={`grid ${gridCols} gap-2 px-2 sm:px-2 md:px-10 lg:px-16 pb-7`}>
              { data[active].options.map((item, index)=>{
                  if (data[active].type === "rimg") {
                    return(
                    <RadioImage 
                      key={index} 
                      data={data}
                      active={active}
                      context={data[active].title}
                      index={index}
                      answers={answers}
                      answer={item.value} 
                      img={item.img}
                      handleChange={handleChange}
                    />
                    )
                  }
                  if (data[active].type === "rtext") {
                    return(
                      <RadioText
                        key={index}
                        data={data}
                        active={active}
                        context={data[active].title}
                        index={index}
                        answers={answers}
                        answer={item.value} 
                        handleChange={handleChange}
                      />
                    )
                  }
                })
              }
              </div>)
            }
            {
              free && (
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 sm:gap-x-2 md:gap-x-6 lg:gap-x-10 px-2 sm:px-2 md:px-10 lg:px-16 pb-7">
                  {
                    data[active].type === "bool" && data[active].options.map((item, index)=>{
                      return(<BoolCard
                        key={index}
                        data={data}
                        active={active}
                        context={data[active].title}
                        index={index}
                        answers={answers}
                        answer={item.value} 
                        handleChange={handleChange}
                      />)
                    })
                  }
                  {
                    data[active].type === "input" && data[active].options.map((item, index)=>{
                      return(<Input
                        key={index}
                        data={data}
                        active={active}
                        index={index}
                        answers={answers}
                        field={item.field} 
                        full={item.full}
                        handleOnChange={handleOnChange}
                      />)
                    })
                  }
                  {
                    data[active].type === "textarea" && data[active].options.map((item, index)=>{
                      return(<TextArea
                        key={index}
                        data={data}
                        active={active}
                        index={index}
                        answers={answers}
                        field={item.field} 
                        full={item.full}
                        handleOnChange={handleOnChange}
                      />)
                    })
                  }
                  {
                    data[active].type === "submit" && data[active].options.map((item, index)=>{
                      return(<Submit
                        key={index}
                        data={data}
                        active={active}
                        index={index}
                        answers={answers}
                        field={item.field} 
                        full={item.full}
                        userMail={userMail}
                        setUserMail={setUserMail}
                      />)
                    })
                  }
                </div>
              )
              }
            <div className={`flex ${active>0 ?"justify-between": "justify-end"} bg-[#6f00ff] text-white min-w-full px-10 py-4`}>
              {
                active > 0 && <div onClick={handlePrev} className="flex cursor-pointer gap-1">
                <span className="my-auto"><BsArrowLeft size={20}/></span>
                <span>PREVIOUS</span>
              </div>
              }
              
              <div onClick={handleNext} className="flex cursor-pointer gap-1">
                <span>NEXT</span>
                <span className="my-auto"><BsArrowRight size={20}/></span>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-gray-300 text-white w-24 py-2 rounded-md mx-auto my-3">
            <span className="mx-auto">{active+1}/{data.length}</span>
          </div>
      </div>
    </main>
  )
}
