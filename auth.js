function autenticarUsuario(req, res, next) {
  const { tipoUsuario } = req.body;

  if (tipoUsuario === "ADMIN") {
    return next();
    
  } else {
    return res.status(401).json({ mensagem: "Função não permitida para esse usuário" });
  }
};

export { autenticarUsuario };