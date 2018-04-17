<template>
<v-layout row justify-center align-center>
    <v-flex xs12>
        <v-text-field label="Reguex" v-model="reguexA"></v-text-field>
        <v-btn @click="testNFA">Test</v-btn>
    </v-flex>
</v-layout>
</template>

<script>
import Parser from "../lib/regulex/Parser";
export default {
    data () {
        return {
            reguexA: ""
        };
    },
    methods: {
        testNFA () {
            console.log(Parser.parse(this.reguexA));
        }
    }
};
</script>
