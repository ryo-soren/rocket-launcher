const PowerComponent = props => {
    const {power} = props;
    
    return(
        <>
            <h1 className='text-[1.5rem]'>Power Level: {power}%</h1>
            <div className="h-5 mx-auto bg-gray-300 rounded-full">
                <div className="bg-blue-300 h-5 rounded-full animate" style={{width: `${power}%`}}></div>
            </div>
        </>
    )
}

export default PowerComponent;