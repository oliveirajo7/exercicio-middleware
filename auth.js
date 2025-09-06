function autenticarUsuario(req, res, next) {
  const { tipoUsuario } = req.body;

  if (tipoUsuario === "ADMIN") {
    next();

  } else {

    res.status(403).json({ mensagem: "Funcao nao permitida para esse usuario" });
  }
}

export { autenticarUsuario };