FROM python:3.9
WORKDIR /app
COPY calc.py /app
RUN chmod +x /app/calc.py
ENV PYTHONUNBUFFERED=1
ENTRYPOINT ["python","/app/calc.py"]
CMD ["--help"]
