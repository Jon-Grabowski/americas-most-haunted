"""updated username column

Revision ID: dd5a23f34e08
Revises: 5ee40063c286
Create Date: 2023-08-07 17:14:04.495803

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dd5a23f34e08'
down_revision = '5ee40063c286'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.String(), nullable=True))
        batch_op.drop_column('password')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('username')

    # ### end Alembic commands ###
