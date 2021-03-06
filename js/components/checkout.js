const form = document.getElementById('billing');

const itemForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements;
            const customer = {};
            console.log(elements);

            customer.name = elements.customer.value;

            customer.email = elements.email.value;

            customer.address = elements.address.value;
            
            customer.city = elements.city.value;

            customer.state = elements.state.value;

            customer.zip = elements.zip.value;
            
            onAdd(customer);
            
            form.reset();
        });
        
        const checkbox = document.getElementById('same');

        checkbox.addEventListener('change', function() {
            if(checkbox.value === 'checked') {
                const shipAddress = document.getElementById('s-address');
                shipAddress.required = false;
                const shipCity = document.getElementById('s-city');
                shipCity.required = false;
                const shipState = document.getElementById('s-state');
                shipState.required = false;
                const shipZip = document.getElementById('s-zip');
                shipZip.required = false;
            }
        });
    }
};

export default itemForm;