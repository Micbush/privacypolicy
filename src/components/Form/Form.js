import "./form.css"

const Form = () => {
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    //   }
    const engine = ({form}) => {
          
             
        if (form.input1.value !== "") {
          form.story.value +="<h1>Privacy Policy <br>  \"" +
          form.input1.value + "\"</h1><br><br>Last Updated: `today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()` <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p> <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href=/"/"larsonbro.co"/"/ target=/"/"_blank"/"/>Privacy Policy Tool</a>.</p>\n";
        }
        

      }
    
    //  End -->
    return (
        <div>
            <div className="container">
            <form action="/action_page.php">
            <div className="row">
                    <div className="col-25">
                    <label htmlFor="fname">Enter Your Site Url</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="SU" name="input1" placeholder="Site url..." />
                    </div>
                </div>

       

                <div className="row">
                            <center>
            <input onClick={(e) => engine(e.this.form)} type="button" value="Generate " /> <input br="" type="button" value="Reset" /> <textarea cols="30" name="story" rows="18" wrap=""></textarea>
                    </center>           
            </div>

                <br />


                {/* <div class="row">
                    <div class="col-25">
                    <label for="subject"></label>
                    </div>
                    <div class="col-75">
                    <textarea id="subject" name="story" placeholder="Generated text..." style={{height: "200px"}}></textarea>
                    </div>
                </div> */}
            </form>
        </div>
        
        </div>
    )
}

export default Form
