function RandomMath()
{
    let randomnum=()=>
    {
        return Math.floor(Math.random()*100);
    }
   return(
    <>
        <h4>Random number:{randomnum()}</h4>
    </>
   )
}
export default RandomMath;