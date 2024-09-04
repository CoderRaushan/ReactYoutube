const ErrorMsg = ({ fooditems }) => {
    return (
      fooditems.length === 0 && <h3>Food items are empty using & operator</h3>
    );
  }
  
  export default ErrorMsg;
  