# Guia de Estratégia de Branches (Git)

Este documento descreve uma estratégia simples de branches para projetos acadêmicos com pouca experiência em Git.  
O objetivo é manter o fluxo **claro, organizado e fácil de seguir**.

---

## Estrutura de Branches

- **main**  
  - Sempre estável, contém a versão oficial do projeto.  
  - Só recebe código revisado e testado.  

- **feature/**  
  - Cada pessoa cria uma branch para sua tarefa específica.  
  - Exemplo: `feature/login`, `feature/upload-imagens`.  
  - Após concluir e revisar, faz merge na `main`.

---

## Fluxo de Trabalho

1. **Atualizar a branch principal**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Criar uma branch de funcionalidade**
   ```bash
   git checkout -b feature/nome-da-tarefa
   ```

3. **Fazer commits pequenos e frequentes**
   ```bash
   git add .
   git commit -m "feat(login): adiciona formulário básico"
   ```

4. **Enviar a branch para o remoto**
   ```bash
   git push -u origin feature/nome-da-tarefa
   ```

5. **Abrir Pull Request (PR)**
   - Descreva claramente o que foi feito.  
   - Certifique-se de que os testes passam.  
   - Peça revisão de pelo menos um colega.  

6. **Merge para main**
   - Preferir “Squash and merge” para manter histórico limpo.  
   - Após merge:
     ```bash
     git checkout main
     git pull origin main
     ```

7. **Deletar branch de feature**
   ```bash
   git branch -d feature/nome-da-tarefa
   git push origin --delete feature/nome-da-tarefa
   ```

---

## Boas Práticas

- **Nomes claros**: use prefixos (`feature/`, `bugfix/`, `docs/`).  
- **Commits pequenos**: mensagens padronizadas (`feat:`, `fix:`, `docs:`).  
- **Nada quebra a main**: só mergear quando passar nos testes.  
- **PR obrigatório**: revisão mínima de 1 colega.  
- **Atualizar sempre**: `git pull` antes de começar a trabalhar.  

---

## Variante com Branch de Integração (main + dev)

- **main**: versão estável e apresentável.  
- **dev**: integração diária das features.  
- Fluxo:
  - Trabalhar em `feature/...`  
  - Abrir PR para `dev`  
  - Quando `dev` estiver estável, abrir PR de `dev` → `main`

---

## Visual do Fluxo

```
main ──►───────────────┐──────────────
                       │
feature/login ──► PR ──┘
feature/upload ──► PR ─┐
                        └────► main
```

---

## Checklist de Pull Request

- [ ] Código compila sem erros  
- [ ] Testes passam  
- [ ] Sem arquivos temporários (`node_modules`, `.env`)  
- [ ] Mensagens de commit claras  
- [ ] Revisado por pelo menos 1 colega  

---
```

