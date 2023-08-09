"""visit table edited

Revision ID: 6df4597fdf13
Revises: 5c5a3b07db8b
Create Date: 2023-08-09 08:48:48.243435

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6df4597fdf13'
down_revision = '5c5a3b07db8b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('visits', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date', sa.String(), nullable=True))
        batch_op.drop_column('data')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('visits', schema=None) as batch_op:
        batch_op.add_column(sa.Column('data', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('date')

    # ### end Alembic commands ###