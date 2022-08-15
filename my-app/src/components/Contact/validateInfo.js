export default function validateInfo(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = "Name Required"
    }
    //email 
    if (!values.email) {
        errors.email = "Email Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }
    //job
    // if(!values.job.trim()) {
    //     errors.job = "Please select an Occupation"
    // }
    // if(!values.organization.trim()) {
    //     errors.phone = "Organization Required"
    // }
    return errors;
 }