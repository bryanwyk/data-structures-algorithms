import SuffixTrieNode from './SuffixTrieNode';

// End of a suffix is represented by a null ($) in the 0-th index of a node
// TODO: Complete this
class SuffixTrie {
    constructor(string){
        this.root = new SuffixTrieNode();

        // initialise suffixes of input string into trie
        for (let i=1; i<=string.length; i++) {
            let subStr = string.substring()
        }
    }

    isEmpty(){
        return this.root.children.length === 0;
    }

    add(string){
        let current = this.root;
        // Iterate over each character in the string
        for (let i=0; i<string.length; i++) {
            // Get index of the character
            let charAlphaIndex = this.alphaToIndex(string[i]);
            // If the character exists, traverse to that node
            if (current.children[charAlphaIndex] !== undefined) {
                current = current.children[charAlphaIndex];
            }
            else {
                // Else, add a node for that character
                current.children[charAlphaIndex] = new SuffixTrieNode();
                current = current.children[charAlphaIndex];
            }
        }
        // Add a $/null at the end
        current.children[0] = null;
    }

    alphaToIndex(char){
        return  char.toUpperCase().charCodeAt() - 64;
    }

    substringSearch(substring){

    }
}
