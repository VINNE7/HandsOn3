CREATE TABLE clientes (
	  id INT PRIMARY KEY auto_increment,
  	nome VARCHAR(50) NOT NULL,
  	email VARCHAR(150) NOT NULL,
  	data-de-nascimento DATE NOT NULL
);

CREATE TABLE psicologos (
	  id INT PRIMARY KEY auto_increment,
  	nome VARCHAR(50) NOT NULL,
  	email VARCHAR(150) NOT NULL,
  	senha VARCHAR(30) NOT NULL,
  	apresentacao VARCHAR(255) NOT NULL
);

CREATE TABLE atendimentos (
	  id INT PRIMARY KEY auto_increment,
 	  cliente_id INT NOT NULL,
  	"data-atendimento" DATE NOT NULL,
  	observacao VARCHAR(255) NOT NULL,
    psicologo_id INT NOT NULL,
  	CONSTRAINT FK_PacienteAtendimento FOREIGN KEY (cliente_id) REFERENCES paciente(id) ON DELETE CASCADE,
  	CONSTRAINT FK_PsicologoAtendimento FOREIGN KEY (psicologo_id) REFERENCES psicologo(id) ON DELETE CASCADE
);