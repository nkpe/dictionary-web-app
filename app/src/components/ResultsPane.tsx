import { DictionaryResult } from "../types/DictionaryResult"

export const ResultsPane = ({ dictionaryResult }: { dictionaryResult: DictionaryResult }) => {
    console.log("RESULT: ", dictionaryResult)

    const definitions = dictionaryResult.meanings.definitions.map((definition, i) =>
        <li key={i}>{definition}</li>
    );

    const synonyms = dictionaryResult.meanings.synonyms.map((synonym, i) =>
        <li key={i} className="text-blue-800">{synonym}</li>
    )

    return (
        <div className="min-h-[500px] results-container border-2 border-solid border-cyan-500 rounded-lg w-full flex flex-col gap-3 p-[5px]">
            <div>
                <p>{dictionaryResult.word}</p>
                <p>{dictionaryResult.phoneticsText}</p>
            </div>

            <p>{dictionaryResult.meanings.partOfSpeech}</p>

            <div>
                <h2 className="font-bold  text-gray-500">meaning</h2>
                <ol className="list-decimal list-inside">
                    {definitions}
                </ol>
            </div>

            <div className="flex flex-wrap flex-row gap-1">
                <h2 className="font-bold">synonyms</h2>
                <ul className="flex flex-row flex-wrap gap-2 ">{synonyms}</ul>
            </div>

            <div className="flex flex-wrap flex-row gap-1 text-gray-500">
                <p>source: </p> <a href={dictionaryResult.sourceUrl} className="underline">{dictionaryResult.sourceUrl}</a>
            </div>
           

        </div>
    )
}