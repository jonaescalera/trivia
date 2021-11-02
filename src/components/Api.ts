export type Question = {
    question: string;
    correct_answer: string;
    answers: string[];
}

export type QuestionState = Question & { answers: string[] };

export const getData = async () => {
    const url = "http://localhost:5000/questions";
    const data = await( await fetch(url)).json()
    return data;
}