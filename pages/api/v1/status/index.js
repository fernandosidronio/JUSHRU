function status(request, response) {
    response.status(200).json({ chave: "Quem acessa jushru é acima da média"});

}

export default status