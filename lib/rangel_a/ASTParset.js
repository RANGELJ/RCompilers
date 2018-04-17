let nodeCounter = 0;

/**
 * Creates a node and increases the counter
 */
function createNode () {
    const name = "q" + nodeCounter;
    nodeCounter++;
    return {name, transitions: [], targetOf: []};
}

/**
 * Main function to create an automata
 * @param {*} AST The output from the regulex parser
 */
function createAutomata (AST) {
    if (!AST ) {
        throw new Error("Se requiere un AST para realizar la lectura");
    } else if (!AST.tree) {
        throw new Error("El AST no tiene el formato correcto");
    }
    nodeCounter = 0;
    const start = createNode();
    let finish = start;
    finish = processElement({
        element: AST.tree, start, finish
    });
    return {start, finish};
}
export default createAutomata;

function processElement ({element, start, finish}) {
    if (element.type === "exact") {
        processExactElement({element, start, finish});
    }
}

function processExactElement ({element, start, finish}) {

    const {chars, repeat} = element;

    if (!chars) {
        throw new Error("Elemento exact no contiene chars");
    }

    /**
     * Define the node group that represents this element
     * example
         *  chars: aza  => a -> z -> a
     */
    const startNode = createNode();
    let currentNode = startNode;
    chars.split("").forEach(character => {
        const nextNode = createNode();
        currentNode.transitions.push({
            character,
            origin: currentNode,
            target: nextNode
        });
        currentNode = nextNode;
    });

    if (repeat) {
    } else {
    }
}
