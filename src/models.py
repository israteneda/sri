import datetime

from pydantic import BaseModel, constr


class DocumentType(BaseModel):
    ...


class ApiEnvironment(BaseModel):
    ...


class IssueType(BaseModel):
    ...


class Document(BaseModel):
    issue_date: datetime.date  # ddmmaaaa
    type: DocumentType
    ruc: constr(max_length=13)
    environment: ApiEnvironment
    series: constr(max_length=6)
    sequential: constr(max_length=9)
    numeric_code: constr(max_length=8)
    issue_type: IssueType
    check_digit: int
