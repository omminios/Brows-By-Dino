const MainPoint = ({content}) => {
    return ( 
        <div className="flex flex-col m-2 sm:m-3 items-center text-center p-4 sm:p-8 justify-center rounded-lg bg-teal-400">
            <img src={content.image} className="w-10 h-auto pb-4"></img>
            <h3 className="text-sm sm:text-base lg:text-lg text-white">{content.title}</h3>
            <p className="text-xs sm:text-sm lg:text-base">{content.text}</p>
        </div>
     );
}
 
export default MainPoint;
