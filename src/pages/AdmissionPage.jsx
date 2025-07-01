import Header from "../components/Header/Header";

const AdmissionPage = () =>{
    return(
         <div>

        <Header/>
        <div id="container" class="scroll-bar"> 
        <h1 class="first">Admission at Vivekanand College</h1>
        <p>Welcome to the Admission page of Vivekanand College!We are delighted you're considering joining our vibrant academic community.Our admission process is designed to be straighforward and accessible.</p><br/>
        <p>Please review the eligibility criteria and key dates below for the upcoming academic year.For any queries,feel free to contact our admission office.</p><br/>
        <h1>Eligibility Criteria for Undergraduate Programs</h1><hr></hr>
        <table border="1px">
            <thead>
                 <tr> 
                    <th>Program</th>
                    <th>Minimum Qualification</th>
                    <th>Required Subjects</th>
                    <th>Minimum Marks(%)</th>
                    </tr>
<tr>
                   <td> B.Sc.Computer Science</td>
                  <td> 10+2(or equivalent)</td>
                   <td>Physics, Chemistry, Maths</td>
                   <td>50%</td>
                </tr>

                
                 <tr>
                     <td>B.Com. Accounting & Finance</td>
                     <td>10+2(or equivalent)</td>
                   <td>Commerce Stream</td>
                   <td>45%</td>

                </tr>
                <tr>
                    <td>B.A. English Literature</td>
                   <td>10+2(or equivalent)</td>
                   <td>Any Stream</td>
                   <td>40%</td>
                   </tr>

                
                
            </thead>

        </table> <br/>
        <h1>Application Process</h1>
        <hr>
        </hr>
        <ol>
            <li><b>Online Application:</b>Fill out the application form available on our portal.</li>
            <li><b>Document Submission:</b>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
            <li><b>Entrance Exam(if applicable):</b>Appear for the college's entrance examination.</li>
            <li><b>Merit List & Interview:</b>Check the merit list and attend the interview if shortlisted.</li>
            <li><b>Fee Payment:</b>Complete the admission by paying the required fees.</li>
        </ol>
        <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="Courses page"></a> or <a href="Contact us"></a> directly.</p>

            </div>
            </div>

    )
}

export default AdmissionPage;