import { DictionaryResult } from "../types/DictionaryResult"

export const ResultsPane = ({ dictionaryResult }: { dictionaryResult: DictionaryResult }) => {
    console.log("RESULT: ", dictionaryResult)

    const definitions = dictionaryResult.meanings.definitions.map((def, i) =>
        <li key={i}>{def.definition}</li>
    );

    const synonyms = dictionaryResult.meanings.synonyms.map((synonm, i) =>
        <li key={i}>{synonm}</li>
    )

    return (
        <div className="h-[900px] results-container border-solid border-cyan-500 rounded-lg w-full flex flex-col gap-3">
            <div>
                <p>{dictionaryResult.word}</p>
                <p>{dictionaryResult.phoneticsText}</p>
            </div>

            <p>{dictionaryResult.meanings.partOfSpeech}</p>

            <div>
                <h2 className="font-bold">meaning</h2>
                <ol className="list-decimal list-inside">
                    {definitions}
                </ol>
            </div>

            <div>
                <h2 className="font-bold">synonyms</h2>
                <ul>{synonyms}</ul>
            </div>

        </div>
    )
}