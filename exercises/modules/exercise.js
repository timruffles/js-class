//TODO In the code below, fill in the missing keyword that will allow this function to be exported in the default way. 

export function isTopicValid(topic) {
	let isValid = !topic.author.hasAuthorization;
	return isValid;
}

//TODO Assume there is is-topic-file.js file at this folder.
// Import the isTopicValid module from the is-topic-file located at the same folder as app.js and assign its resulting function to the isTopicValid variable.
// Call the isTopicValid() function, passing the existing topic object as an argument. 

let topic = {
	title: "JS-Class-Module",
	author: { name: "Tim", hasAuthorization: false}
};

//TODO here is one more function.
// Create a single export statement that exports 2 functions (isTopicValid and isAuthorizedMember) on this module. It will contain the pre-existing code refactoring.

export function isAuthorizedMember(email) {
	const EMAIL_DOMAIN = "@jsclass.org";
	return email.indexOf(EMAIL_DOMAIN) > 0;
}

// TODO Assume there is validator.js file that exports above 2 functions. 
// import the isTopicValid and isAuthorizedMember functions from it and assign them with the same name.

//TODO By using CommonJS, export the 2 functions.

// TODO Complete the following code to export TimClass class using the default type export. 

class TimClass {
	constructor(subject) {
		this.subject = subject;
	}

	addMember(name) {
		API.addMember(name, this.subject);
	}

	removeMemeber(name) {
		API.removeMemeber(name, this.subject);
	}
}