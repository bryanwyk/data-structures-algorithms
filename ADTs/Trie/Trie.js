import TrieNode from './TrieNode';

// A $ node is represented by a null in the 0-th index
class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    isEmpty(){
        return this.root.children.length > 0;
    }

    add(string){
        let current = this.root;
        // Iterate over the characters in the string
        for (let i=0; i<string.length; i++) {
            // check if the next letter exists in a current prefix
            // if it does, traverse to that node
            if (current.children[this.indexToAlpha(string[i])] !== undefined) {
                current = current.children[this.indexToAlpha(string[i])];
            }
            // else, create the node, then traverse to that node
            else {
                current.children[this.indexToAlpha(string[i])] = new TrieNode();
                current = current.children[this.indexToAlpha(string[i])];
            }
        }
        // At the end, add a $/null
        current.children[0] = null;

    }

    // Search for a string in the trie
    search(string){
        let current = this.root;
        // Iterate over the characters in the string
        for (let i=0; i<string.length; i++) {
            // if the current character is in the node, then go to that node
            if (current.children[this.indexToAlpha(string[i])] !== undefined) {
                current = current[this.indexToAlpha(string[i])];
            }
            else {
                return false;
            }
        }

        // Check that the last node contains $
        if (current[0] === null) {
            return true;
        }
        return false;
    }

    // indexToAlpha
    /*
    https://en.wikipedia.org/wiki/List_of_Unicode_characters#Character_reference_overview
    To convert unicode of uppercase latin alphabet to their respective alphabetical index,
    just minus 64.
    */
    indexToAlpha(char){
        // convert unicode
        const unicode = char.toUpperCase().charCodeAt();
        const alphaIndex = unicode - 64;

        // TODO: Test that bounds of alphaIndex should lie between 1 and 26 inclusive.
        return alphaIndex;
    }
}