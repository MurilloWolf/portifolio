import tw from 'twin.macro';
import { Copy } from 'phosphor-react';

const CardHeader = tw.div`
  flex-1 
  flex
  flex-row   
`;

const CardText = tw.p`
  text-sm 
  m-5 
  sm:text-xl 
  sm:mt-4 
  sm:mb-4 
  md:mt-0 
  md:mb-0 
  md:pt-4 
  md:text-lg
`;

const CardTitle = tw.h3`
  m-5 
  text-xl 
  md:text-3xl 
  md:mt-0 
  md:mb-0 
  md:p-0  
  sm:text-2xl 
  sm:mt-4 
  sm:mb-4 
`;

const CardInfo = tw.div`  
  flex   
  flex-1  
  flex-col   
  items-start   
  justify-center
  md:ml-1   
  sm:ml-1 
`;

const InfoTitle = tw.h3`
  prose 
  font-normal
  md:text-xl 
  sm:text-sm 
`;

const InfoSubtitle = tw.p`
  text-sm 
  font-light 
  sm:text-xs 
`;

const CardContent = tw.div`
  flex 
  flex-col 
  flex-1 
  w-full 
  max-w-xl 
  p-6  
  justify-evenly
  md:pt-5  
  sm:pt-2 
  sm:pb-2 
`;

const CardAvatar = tw.img`  
w-8   
h-8   
m-4   
  rounded-full
  md:w-12 
  md:h-12  
  sm:w-10   
  sm:h-10   
`;

const CopyIcon = tw(Copy)`
  absolute 
  w-6 
  right-1 
  cursor-pointer
  hover:bg-gray-900
  hover:rounded-full 
  md:top-4
  md:right-4 
  md:w-8 
  sm:right-3 
  sm:top-3 p-1 
  sm:w-8 
`;

const CodePanel = tw.div`
  flex 
  min-h-full
  h-full
  w-full 
  m-0
  relative 
  md:h-52 
  md:mt-6 
  md:p-8 
  sm:p-4 
  sm:mt-3 
  sm:h-36 
`;

const ButtonLink = tw.button`
  btn
  btn-link
  mt-6
  mb-6 
  mr-6 
  absolute 
  bottom-2 
  right-2
`;

export {
  CardHeader,
  CardInfo,
  CardAvatar,
  CopyIcon,
  ButtonLink,
  CardContent,
  CardTitle,
  CardText,
  CodePanel,
  InfoTitle,
  InfoSubtitle,
};
