import { UserContext } from "../../contextes/UserContext";
import axios from "axios";
import { useState, useContext } from "react";
import styles from "../Login.module.css";

function NewChar() {
  const { user } = useContext(UserContext);
  const { character, setChar } = useContext(UserContext);
  const [name, setName] = useState("");
  const [life, setLife] = useState("");
  const [strength, setStrength] = useState("");
  const [resistance, setResistance] = useState("");
  const [stamina, setStamina] = useState("");
  const [will, setWill] = useState("");
  const [speed, setSpeed] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [charisma, setCharisma] = useState("");
  const [perception, setPerception] = useState("");
  const [manaEnergy, setManaEnergy] = useState("");
  const [magicPower, setMagicPower] = useState("");
  const [User_id, setUser_id] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setUser_id(user.id);
    try {
      const response = await axios.post(
        "http://localhost:3000/character",
        JSON.stringify({
          User_id,
          name,
          life,
          strength,
          resistance,
          stamina,
          will,
          speed,
          dexterity,
          charisma,
          perception,
          manaEnergy,
          magicPower,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
      setChar(response.data.character);
      setError("Personagem registrado com sucesso");
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setError("Erro ao acessar o servidorx");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };

  const handleNewChar = async (e) => {
    e.preventDefault();
    setChar(null);
    setError("");
  };

  return user == null ? (
    <h1>Usuário não logado</h1>
  ) : character == null ? (
    <div>
      <h1>Personagens do :{user.name}</h1>
      <h1 className={styles.text}>Create Character</h1>
      <form>
        <div>
          <input
            type="name"
            name="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            name="life"
            placeholder="Life"
            required
            onChange={(e) => setLife(e.target.value)}
          />
        </div>
        <input
          name="strength"
          placeholder="Strength"
          required
          onChange={(e) => setStrength(e.target.value)}
        />
        <div>
          <input
            name="resistance"
            placeholder="Resistance"
            required
            onChange={(e) => setResistance(e.target.value)}
          />
        </div>
        <div>
          <input
            name="stamina"
            placeholder="Stamina"
            required
            onChange={(e) => setStamina(e.target.value)}
          />
        </div>
        <div>
          <input
            name="will"
            placeholder="Will"
            required
            onChange={(e) => setWill(e.target.value)}
          />
        </div>
        <div>
          <input
            name="speed"
            placeholder="Speed"
            required
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        <div>
          <input
            name="dexterity"
            placeholder="Dexterity"
            required
            onChange={(e) => setDexterity(e.target.value)}
          />
        </div>
        <div>
          <input
            name="charisma"
            placeholder="Charisma"
            required
            onChange={(e) => setCharisma(e.target.value)}
          />
        </div>
        <div>
          <input
            name="perception"
            placeholder="Perception"
            required
            onChange={(e) => setPerception(e.target.value)}
          />
        </div>
        <div>
          <input
            name="manaEnergy"
            placeholder="Mana/Energy"
            required
            onChange={(e) => setManaEnergy(e.target.value)}
          />
        </div>
        <input
          name="magicPower"
          placeholder="Magic Power"
          required
          onChange={(e) => setMagicPower(e.target.value)}
        />
        <button
          type="submit"
          className="btn-login"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </button>
      </form>
      <p>{error}</p>
    </div>
  ) : (
    <div>
      <h1>Personagem criado:{character.name}</h1>
      <button
        type="submit"
        className="btn-login"
        onClick={(e) => handleNewChar(e)}
      >
        Criar personagem novamente
      </button>
    </div>
  );
}

export default NewChar;
