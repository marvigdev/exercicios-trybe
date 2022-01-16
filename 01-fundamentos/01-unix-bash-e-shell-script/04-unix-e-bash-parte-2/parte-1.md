# Parte I - Comandos de Input e Output

1. Navegue até a pasta `unix_tests`;
```zsh
cd unix_tests
```

2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, um em cada linha.
```zsh
cat > skills2.txt
Internet
Unix
Bash
```

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.
```zsh
cat >> skills2.txt
...
```

4. Conte quantas linhas tem o arquivo `skills2.txt`.
```zsh
wc -l skills2.txt
```

5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.
```zsh
sort skills2.txt | head -3 > top_skills.txt
```

6. Crie um novo arquivo chamado `phrases2.txt` pelo o terminal e adicione algumas frases de suas escolha.
```zsh
cat > phrases2.txt
...
```

7. Conte o número de linhas que contêm as letras `br`.
```zsh
grep 'br' phrases2.txt | wc -l
```

8. Conte o número de linhas que **não** contêm as letras `br`.
```zsh
grep -v 'br' phrases2.txt | wc -l 
```

9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.
```zsh
cat > phrases2.txt
...
```

10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`
```zsh
cat phrases2.txt countries.txt > bunch_of_things.txt
```

11. Ordene o arquivo `bunch_of_things.txt`.
```zsh
sort bunch_of_things.txt
```