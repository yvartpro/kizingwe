const Message = ({msg}) =>{
	return(
    <div className="flex justify-center ">
      <div className="absolute rounded-full px-4 py-2 bg-slate-100 mt-14">
    	  <p className="text-slate-600 fs-xs">{msg}</p>
      </div>
    </div>
	)
}


export default Message