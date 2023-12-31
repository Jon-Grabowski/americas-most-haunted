"""added experiences table

Revision ID: 1b42bc1701ca
Revises: 6df4597fdf13
Create Date: 2023-08-09 16:15:17.157480

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1b42bc1701ca'
down_revision = '6df4597fdf13'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('experiences',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('visit_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['visit_id'], ['visits.id'], name=op.f('fk_experiences_visit_id_visits')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('experiences')
    # ### end Alembic commands ###
