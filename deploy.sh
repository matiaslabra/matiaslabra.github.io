rm -rf build && bun run build && \
cd build && git init && git add . \
&& git commit -m "Last build from react branch" && \
git remote add origin https://github.com/matiaslabra/matiaslabra.github.io.git 2>/dev/null || git remote set-url origin https://github.com/matiaslabra/matiaslabra.github.io.git && \
git push --force origin HEAD:main && cd ..