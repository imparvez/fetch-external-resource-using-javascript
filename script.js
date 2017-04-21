function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('offers');
const url = '';

fetch(url)
    .then((resp) => resp.json())
    .then(function(resp) {
        let offers = resp.BookMyShow.arrOffer;
        return offers.map((offer) => {
            // console.log(offer);
	        let li = createNode('li'),
				h2 = createNode('h2'),
	    		span = createNode('span'),
				button = createNode('button');
			h2.innerHTML = offer.Offer_strName;
			span.innerHTML = offer.Offer_strLongDesc.slice(0, 50) + '...';
			button.innerHTML = "view offer";
			append(li, h2);
			append(li, span);
			append(li, button);
			append(ul, li);
        })

    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
