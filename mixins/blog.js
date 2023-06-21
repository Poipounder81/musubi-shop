// The js method for the food blog page
export const blogMixin = {
    methods: {

        // When a user clicks the read more button, show a pop alert message that there is no available article at this time
        readMoreAlert() {
            alert('Sadly this article does not exist at the moment. Sorry!!!');
        }
    }
}