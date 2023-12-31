import { DataTypes, ForeignKey, Model, Optional } from "sequelize";

import DBConnection from "../db/DBConnection.js";
import Quiz from "./Quiz.js";
import Answer from "./Answer.js";

type QuestionAttributes = {
  id: number;
  questionText: string;
  quizId: ForeignKey<Quiz["id"]>;
  // other attributes...
};

// We're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
export type QuestionCreationAttributes = Optional<QuestionAttributes, "id">;

class Question extends Model<QuestionAttributes, QuestionCreationAttributes> {
  declare id: number;
  declare questionText: string;
  declare quizId: ForeignKey<Quiz["id"]>;
  // other attributes...
}

export const init = () => {
  Question.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      questionText: {
        type: DataTypes.STRING,
      },
    },
    { sequelize: DBConnection.connection() }
  );
};

export default Question;
